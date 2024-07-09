/**
 * 이 코드는 svg 파일 형태로 작성된 아이콘을 YDS Web에서 사용할 수 있도록 React 컴포넌트로 변환하는 코드입니다.
 */

import fs from 'fs/promises';
import path from 'path';

import prettier from 'prettier';
import { DOMParser, XMLSerializer } from 'xmldom';

const __dirname = path.resolve();
const ICONS_DIR = path.join(__dirname, './iconsAsset/static');
const ICONS_COMPONENTS_DIR = path.join(__dirname, './src/style/foundation/icons/generated');
const ICONS_INDEX_PATH = path.join(__dirname, './src/style/foundation/icons/generated/index.ts');
const ICONS_STORIES_PATH = path.join(__dirname, './src/style/foundation/icons/Icons.stories.tsx');
const PRETTIER_CONFIG_PATH = path.join(__dirname, './.prettierrc.json');
const prettierConfig = JSON.parse(await fs.readFile(PRETTIER_CONFIG_PATH, 'utf-8'));

const toCamelCase = (str) => {
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
};

const isCamelCase = (str) => {
  return /^[a-z][A-Za-z0-9]*$/.test(str);
};

function camelizeElementAttributes(elem) {
  const queue = [elem];

  while (queue.length) {
    const curElem = queue.pop();

    if (curElem.hasAttributes()) {
      Array.from(curElem.attributes).forEach((attr) => {
        if (!isCamelCase(attr.name)) {
          curElem.setAttribute(toCamelCase(attr.name), attr.value);
          curElem.removeAttribute(attr.name);
        }
      });
    }

    if (curElem.hasChildNodes()) {
      Array.from(curElem.childNodes).forEach((child) => {
        if (child.nodeType === 1) {
          queue.push(child);
        }
      });
    }
  }

  return elem;
}

const SVGComponentTemplate = (name, viewBox, svg) => `/**
 * 이 파일은 iconsAsset/convert.js에 의해 자동 생성되었습니다.
 * 직접 수정하는 대신 iconsAsset/convert.js를 수정하세요.
 */

import { memo, forwardRef } from 'react';

import { IconBase } from '../icon.base';
import { IconProps } from '../icon.type';

export const ${name} = memo(forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <IconBase ref={ref} viewBox="${viewBox}" {...props}>
      ${svg}
    </IconBase>
    )));

${name}.displayName = '${name}';
`;

const StoryTemplate = (icons) => `/**
 * 이 파일은 iconsAsset/convert.js에 의해 자동 생성되었습니다.
 * 직접 수정하는 대신 iconsAsset/convert.js를 수정하세요.
 */

import { Primary as PrimaryBlock, Controls, Markdown } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';

import IconDocs from './IconDocs.md?raw';
import { IconBase } from './icon.base';

import {
  ${icons.map(({ componentName }) => `${componentName},`).join('\n  ')}
} from '.';

const Icons = [
  ${icons.map(({ componentName }) => `${componentName},`).join('\n  ')}
];

const meta: Meta = {
  title: 'Foundation/Icons',
  component: IconBase,
  parameters: {
    docs: {
      page: () => (
        <>
          <Markdown>{IconDocs}</Markdown>
          <PrimaryBlock />
          <Controls />
        </>
      ),
    },
  },
};
export default meta;

type Story = StoryObj<typeof IconBase>;

const Container = styled.div\`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
\`;

const IconWrapper = styled.div\`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
\`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Render = (args: any) => {
  return (
    <Container>
      {Icons.map((Icon, index) => (
        <IconWrapper>
          <Icon key={index} {...args} />
          {Icon.displayName}
        </IconWrapper>
      ))}
    </Container>
  );
};

export const Primary: Story = {
  args: {
    size: '24px',
  },
  render: Render,
};
`;

const clearIconsDir = async () => {
  // generated folder
  if (await fs.stat(ICONS_COMPONENTS_DIR).catch(() => false)) {
    await fs.rm(ICONS_COMPONENTS_DIR, { recursive: true });
  }
  await fs.mkdir(ICONS_COMPONENTS_DIR);

  // story
  if (await fs.stat(ICONS_STORIES_PATH).catch(() => false)) {
    await fs.rm(ICONS_STORIES_PATH);
  }
};

const getIcons = async () => {
  const svgIconPaths = (await fs.readdir(ICONS_DIR)).map((filename) =>
    path.resolve(ICONS_DIR, filename)
  );
  const icons = await Promise.all(
    svgIconPaths.map(async (svgIconPath) => {
      const svgIcon = await fs.readFile(svgIconPath, 'utf-8');
      const svgIconName = path.basename(svgIconPath, '.svg');
      const svgIconComponentName = (
        svgIconName.charAt(0).toUpperCase() + svgIconName.slice(1)
      ).replace(/_([a-z])/g, (match, char) => char.toUpperCase());
      const svgIconComponentPath = path.join(ICONS_COMPONENTS_DIR, `${svgIconComponentName}.tsx`);
      return {
        icon: svgIcon,
        name: svgIconName,
        componentName: svgIconComponentName,
        componentPath: svgIconComponentPath,
      };
    })
  );
  return icons;
};

const convertIcons = async (icons) => {
  // Convert Icons
  const serializer = new XMLSerializer();
  const domParser = new DOMParser();
  await Promise.all(
    icons.map(async ({ icon, componentName, componentPath }) => {
      const dom = domParser.parseFromString(icon, 'image/svg+xml');
      const $svg = dom.getElementsByTagName('svg')[0];

      camelizeElementAttributes($svg);
      $svg.setAttribute('fill', 'current');
      Array.from(dom.getElementsByTagName('path')).forEach((p) => p.removeAttribute('fill'));
      const viewBox = $svg.getAttribute('viewBox');
      const innerSvg = Array.from($svg.childNodes)
        .map((v) => serializer.serializeToString(v))
        .join('');
      const component = SVGComponentTemplate(componentName, viewBox, innerSvg);
      const prettyComponent = await prettier.format(component, {
        ...prettierConfig,
        filepath: componentPath,
      });
      await fs.writeFile(componentPath, prettyComponent);
    })
  );
};

const createIndexTs = async (icons) => {
  const index = icons
    .map(({ componentName }) => `export { ${componentName} } from './${componentName}';`)
    .join('\n');
  const prettyIndex = await prettier.format(index, {
    ...prettierConfig,
    filepath: ICONS_INDEX_PATH,
  });
  await fs.writeFile(ICONS_INDEX_PATH, prettyIndex);
};

const createStory = async (icons) => {
  const story = StoryTemplate(icons);
  // const prettyStory = await prettier.format(story, {
  //     ...prettierConfig,
  //     filepath: ICONS_INDEX_PATH,
  // });
  await fs.writeFile(ICONS_STORIES_PATH, story);
};

(async () => {
  await clearIconsDir();
  const icons = await getIcons();
  await convertIcons(icons);
  await createIndexTs(icons);
  await createStory(icons);
})();

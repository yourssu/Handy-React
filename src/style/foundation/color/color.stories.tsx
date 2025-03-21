import type { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';

import { semanticColorPalette } from '@/style/foundation/color/semanticColor';

type SemanticColorPalette = {
  title: string;
  colors: Record<string, string>;
};

interface AllThemeColorsProps {
  children?: ({ colors }: { colors: SemanticColorPalette[] }) => React.ReactElement;
}

const meta: Meta = {
  title: 'Foundation/Color',
  parameters: {
    layout: 'centered',
  },
};

const StyledColorExample = styled.div`
  width: 100px;
  height: 100px;

  color: ${({ theme }) => theme.semantic.color.textBasicWhite};
  background-color: ${({ theme }) => theme.semantic.color.bgBrandPrimary};
`;

const AllThemeColors = ({ children }: AllThemeColorsProps) => {
  const getSemanticColorPalette = (prefix: string) => {
    const colors: Record<string, string> = {};

    Object.entries(semanticColorPalette).forEach(([name, value]) => {
      if (name.startsWith(prefix)) {
        colors[name] = value;
      }
    });

    if (Object.keys(colors).length === 0) {
      throw Error(`No colors found for prefix: ${prefix}`);
    }

    return {
      title: `${prefix}`,
      colors,
    };
  };

  const semanticColorCategories = {
    background: ['bgBasic', 'bgBrand', 'bgStatus'],
    text: ['textBasic', 'textBrand', 'textStatus'],
    line: ['lineBasic', 'lineBrand', 'lineStatus'],
    'button/box': ['buttonFilledPrimary', 'buttonFilledSecondary', 'buttonOutlined'],
    'button/text': ['buttonTextPrimary', 'buttonTextSecondary'],
    'button/fab': ['buttonFabPrimary', 'buttonFabSecondary'],
    'button/radio': ['buttonRadio'],
    icon: ['iconBasic', 'iconBrand'],
    checkbox: ['checkbox'],
    chip: ['chip'],
    pagination: ['paginationBrand', 'paginationBasic'],
    switch: ['switch'],
    snackbar: ['snackbar'],
  };

  return (
    <>
      {Object.keys(semanticColorCategories).map((section) => {
        const colors = semanticColorCategories[section as keyof typeof semanticColorCategories].map(
          (category) => getSemanticColorPalette(category)
        );

        return (
          <div>
            <h2>{section}</h2>
            {children && children({ colors })}
            <br />
            <br />
          </div>
        );
      })}
    </>
  );
};

const ColorExample: StoryObj = {
  render: () => <StyledColorExample>Color 색상</StyledColorExample>,
};
export default meta;
export { ColorExample, AllThemeColors };

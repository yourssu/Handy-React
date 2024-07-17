import { Stories, Primary as PrimaryBlock, Controls, Title } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';

import { IcExternalLinkLine } from '@/style';

import { BoxButton } from './BoxButton';

const meta: Meta<typeof BoxButton> = {
  title: 'Atoms/BoxButton',
  component: BoxButton,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <PrimaryBlock />
          <Controls />
          <h2> Size에 따른 속성 </h2>
          <h3> Xlarge </h3>
          <span>
            {
              '이 옵션을 선택하면 `height = 56`, `typo = B1_Sb_16`, `radius = 16`, `horizontal Padding = 20` 으로 설정됩니다.'
            }
          </span>
          <h3> Large </h3>
          <span>
            {
              '이 옵션을 선택하면 `height = 52`, `typo = B1_Sb_16`, `radius = 16`, `horizontal Padding = 20` 으로 설정됩니다.'
            }
          </span>
          <h3> Medium </h3>
          <span>
            {
              '이 옵션을 선택하면 `height = 48`, `typo = B1_Sb_16`, `radius = 14`, `horizontal Padding = 16` 으로 설정됩니다.'
            }
          </span>
          <h3> Small</h3>
          <span>
            {
              '이 옵션을 선택하면 `height = 40`, `typo = B1_Sb_14`, `radius = 12`, `horizontal Padding = 16` 으로 설정됩니다.'
            }
          </span>
          <h3> Xsmall </h3>
          <span>
            {
              '이 옵션을 선택하면 `height = 32`, `typo = B1_Sb_12`, `radius = 10`, `horizontal Padding = 8` 으로 설정됩니다.'
            }
          </span>
          <h3> Xxsmall </h3>
          <span>
            {
              '이 옵션을 선택하면 `height = 24`, `typo = B1_Sb_12`, `radius = 8`, `horizontal Padding = 8` 으로 설정됩니다.'
            }
          </span>
          <Stories />
        </>
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof BoxButton>;

export const Primary: Story = {
  args: {
    children: 'Primary/Large',
    size: 'Large',
    hierarchy: 'primary',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Primary/Disabled/Large',
    size: 'Large',
    hierarchy: 'primary',
    disabled: true,
    leftIcon: <IcExternalLinkLine />,
  },
};

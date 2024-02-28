import { Stories, Primary as PrimaryBlock, Controls, Title } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';

import { IcGroundLine } from '@/style';

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
          <h3> extraLarge </h3>
          <span>
            {
              '이 옵션을 선택하면 `height = 56`, `typo = button1`, `iconSize = medium(24*24)`, `horizontal Padding = 16` 으로 설정됩니다.'
            }
          </span>
          <h3> large </h3>
          <span>
            {
              '이 옵션을 선택하면 `height = 48`, `typo = button2`, `iconSize = medium(24*24)`, `horizontal Padding = 16` 으로 설정됩니다.'
            }
          </span>
          <h3> medium </h3>
          <span>
            {
              '이 옵션을 선택하면 `height = 40`, `typo = button2`, `iconSize = medium(24*24)`, `horizontal Padding = 12` 으로 설정됩니다.'
            }
          </span>
          <h3> small </h3>
          <span>
            {
              '이 옵션을 선택하면 `height = 32`, `typo = button4`, `iconSize = small(16*16)`, `horizontal Padding = 12` 으로 설정됩니다.'
            }
          </span>
          <h2> 속성 우선순위 </h2>
          <span>{'속성이 충돌할 때는 isDisabled > isWarned 순으로 우선됩니다.'}</span>
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
    children: 'Primary/Large/filled',
    size: 'large',
    variant: 'filled',
    rounding: 8,
    disabled: false,
    isWarned: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled/Large/tinted',
    size: 'large',
    variant: 'tinted',
    rounding: 8,
    disabled: true,
    isWarned: false,
    leftIcon: <IcGroundLine />,
  },
};

export const Warned: Story = {
  args: {
    children: 'Warned/Large/line',
    size: 'large',
    variant: 'line',
    rounding: 8,
    disabled: false,
    isWarned: true,
    leftIcon: <IcGroundLine />,
    rightIcon: <IcGroundLine />,
  },
};

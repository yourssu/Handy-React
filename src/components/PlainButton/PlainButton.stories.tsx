import { Meta, StoryObj } from '@storybook/react';

import { IcGroundLine } from '@/style';

import { PlainButton } from './PlainButton';
import { Stories, Primary as PrimaryBlock, Controls, Title } from '@storybook/blocks';

const meta: Meta<typeof PlainButton> = {
  title: 'Atoms/PlainButton',
  component: PlainButton,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <PrimaryBlock />
          <Controls />
          <h2> Size에 따른 속성 </h2>
          <h3> large </h3>
          <span>
            {
              '이 옵션을 선택하면 `iconSize = medium(24*24)` 으로 설정됩니다. text는 보이지 않습니다.'
            }
          </span>
          <h3> medium </h3>
          <span>
            {'이 옵션을 선택하면 `typo = button3`, `iconSize = small(20*20)` 으로 설정됩니다.'}
          </span>
          <h3> small </h3>
          <span>
            {'이 옵션을 선택하면 `typo = button4`, `iconSize = extraSmall(16*16)` 으로 설정됩니다.'}
          </span>
          <h2> 속성 우선순위 </h2>
          <span>{'속성이 충돌할 때는 isDisabled > isWarned > isPointed 순으로 우선됩니다.'}</span>
          <Stories />
        </>
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof PlainButton>;

export const Primary: Story = {
  args: {
    children: 'Primary/Small',
    size: 'small',
    isPointed: false,
    isWarned: false,
  },
};

export const Pointed: Story = {
  args: {
    children: 'Pointed/Medium',
    size: 'medium',
    isPointed: true,
    isWarned: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled/Medium',
    size: 'medium',
    disabled: true,
    isPointed: false,
    isWarned: false,
    leftIcon: <IcGroundLine />,
  },
};

export const Warned: Story = {
  args: {
    children: 'Warned/Large',
    size: 'large',
    isPointed: false,
    isWarned: true,
    rightIcon: <IcGroundLine />,
  },
};

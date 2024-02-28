import { Stories, Primary as PrimaryBlock, Controls, Title } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';

import { CheckBox } from './CheckBox';

const meta: Meta<typeof CheckBox> = {
  title: 'Atoms/CheckBox',
  component: CheckBox,
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
              '이 옵션을 선택하면 `iconSize = medium(24*24)`, `typo = button3`, `CheckBox icon과 label 사이 여백 = 8` 으로 설정됩니다.'
            }
          </span>
          <h3> medium </h3>
          <span>
            {
              '이 옵션을 선택하면 `iconSize = small(20*20)`, `typo = button3`, `CheckBox icon과 label 사이 여백 = 8` 으로 설정됩니다.'
            }
          </span>
          <h3> small </h3>
          <span>
            {
              '이 옵션을 선택하면 `iconSize = extraSmall(16*16)`, `typo = button4`, `CheckBox icon과 label 사이 여백 = 4` 으로 설정됩니다.'
            }
          </span>
          <h2> 속성 우선순위 </h2>
          <span>{'속성이 충돌할 때는 isDisabled > isSelected 순으로 우선됩니다.'}</span>
          <Stories />
        </>
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Primary: Story = {
  args: {
    children: 'Primary/Large',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled/Medium',
    size: 'medium',
    isDisabled: true,
    isSelected: false,
  },
};

export const DisabledSelected: Story = {
  args: {
    children: 'DisabledSelected/Medium',
    size: 'medium',
    isDisabled: true,
    isSelected: true,
  },
};

export const Selected: Story = {
  args: {
    children: 'Selected/Small',
    size: 'small',
    isDisabled: false,
    isSelected: true,
  },
};

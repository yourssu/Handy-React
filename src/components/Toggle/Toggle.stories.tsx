import { Stories, Primary as PrimaryBlock, Controls, Title } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';

import { Toggle } from './Toggle';
const meta: Meta<typeof Toggle> = {
  title: 'Atoms/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <PrimaryBlock />
          <Controls />
          <h2> 주의사항 </h2>
          <ol>
            <li>
              isDisabled=true인 경우, 사용자는 isSelected 속성 값을 확인할 수 있지만 바꿀 수는
              없습니다.
            </li>
          </ol>
          <br />
          <Stories />
        </>
      ),
    },
  },
};
export default meta;

const ToggleStory = ({ ...toggleProps }) => {
  return <Toggle {...toggleProps} />;
};

type Story = StoryObj<typeof Toggle>;
export const Primary: Story = {
  args: {
    isDisabled: false,
    isSelected: false,
  },
  render: ToggleStory,
};

export const Selected: Story = {
  args: {
    isDisabled: false,
    isSelected: true,
  },
  render: ToggleStory,
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    isSelected: false,
  },
  render: ToggleStory,
};

export const DisabledSelected: Story = {
  args: {
    isDisabled: true,
    isSelected: true,
  },
  render: ToggleStory,
};

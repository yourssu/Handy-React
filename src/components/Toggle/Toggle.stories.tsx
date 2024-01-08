import { Meta, StoryObj } from '@storybook/react';

import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Atoms/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
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

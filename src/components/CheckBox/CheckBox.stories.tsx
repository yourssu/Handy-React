import { Meta, StoryObj } from '@storybook/react';

import { CheckBox } from './CheckBox';

const meta: Meta<typeof CheckBox> = {
  title: 'Atoms/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
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

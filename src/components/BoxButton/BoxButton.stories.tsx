import { Meta, StoryObj } from '@storybook/react';

import { IcGroundLine } from '@/style';

import { BoxButton } from './BoxButton';

const meta: Meta<typeof BoxButton> = {
  title: 'Atoms/BoxButton',
  component: BoxButton,
  parameters: {
    layout: 'centered',
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
    isDisabled: false,
    isWarned: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled/Large/tinted',
    size: 'large',
    variant: 'tinted',
    rounding: 8,
    isDisabled: true,
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
    isDisabled: false,
    isWarned: true,
    leftIcon: <IcGroundLine />,
    rightIcon: <IcGroundLine />,
  },
};

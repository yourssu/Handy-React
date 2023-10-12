import { Meta, StoryObj } from '@storybook/react';

import { IcGroundLine } from '@/style';

import { PlainButton } from './PlainButton';

const meta: Meta<typeof PlainButton> = {
  title: 'Atoms/PlainButton',
  component: PlainButton,
  parameters: {
    layout: 'centered',
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

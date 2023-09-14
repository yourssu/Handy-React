import { Meta, StoryObj } from '@storybook/react';

import { IcGroundLine } from '@/style';

import { BoxButton } from './BoxButton';

const meta: Meta<typeof BoxButton> = {
  component: BoxButton,
  title: 'Component/BoxButton',
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    size: {
      control: {
        type: 'radio',
      },
      options: ['small', 'medium', 'large', 'extraLarge'],
    },
    types: {
      control: {
        type: 'radio',
      },
      options: ['filled', 'tinted', 'line'],
    },
    rounding: {
      control: {
        type: 'radio',
      },
      options: [4, 8],
    },
  },
};

export default meta;
type Story = StoryObj<typeof BoxButton>;

export const Primary: Story = {
  args: {
    title: 'Enabled/Large/filled',
    size: 'large',
    types: 'filled',
    rounding: 8,
    disabled: false,
    isWarned: false,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled/Large/tinted',
    size: 'large',
    types: 'tinted',
    rounding: 8,
    disabled: true,
    isWarned: false,
    leftIcon: (
      <IcGroundLine
        style={{
          width: 24,
          height: 24,
        }}
      />
    ),
  },
};

export const Warned: Story = {
  args: {
    title: 'Warned/Large/line',
    size: 'large',
    types: 'line',
    rounding: 8,
    disabled: false,
    isWarned: true,
    leftIcon: (
      <IcGroundLine
        style={{
          width: 24,
          height: 24,
        }}
      />
    ),
    rightIcon: (
      <IcGroundLine
        style={{
          width: 24,
          height: 24,
        }}
      />
    ),
  },
};

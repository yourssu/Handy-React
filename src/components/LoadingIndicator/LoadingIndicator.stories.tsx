import { Meta, StoryObj } from '@storybook/react';

import { LoadingIndicator } from './LoadingIndicator';
import { LoadingIndicatorProps } from './LoadingIndicator.type';

const meta: Meta<LoadingIndicatorProps> = {
  title: 'Components/Loading Indicator',
  component: LoadingIndicator,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    indicatorColor: {
      description: 'Loading Indicator의 색상을 결정하는 속성',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {};

export const Color: Story = {
  args: {
    indicatorColor: '#000000',
  },
};

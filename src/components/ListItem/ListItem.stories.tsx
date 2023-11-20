import { Meta, StoryObj } from '@storybook/react';

import { IcGroundLine } from '@/style';

import { ListItem } from './ListItem';

const meta: Meta<typeof ListItem> = {
  title: 'Atoms/ListItem',
  component: ListItem,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    isPressed: false,
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: 'WithLeftIcon',
    isPressed: false,
    leftIcon: <IcGroundLine />,
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'WithRightIcon',
    isPressed: true,
    width: '400px',
    rightIcon: <IcGroundLine />,
  },
};

export const WithIcon: Story = {
  args: {
    children: 'WithIcon',
    width: '400px',
    isPressed: true,
    leftIcon: <IcGroundLine />,
    rightIcon: <IcGroundLine />,
  },
};

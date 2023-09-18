import { Meta, StoryObj } from '@storybook/react';

import { IcGroundLine } from '@/style';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

const BadgeStory = ({ ...badgeProps }) => {
  return <Badge {...badgeProps} />;
};

type Story = StoryObj<typeof Badge>;
export const withIcon: Story = {
  args: {
    children: 'Badge',
    leftIcon: <IcGroundLine />,
  },
  render: BadgeStory,
};

export const withoutIcon: Story = {
  args: {
    children: 'Badge',
  },
  render: BadgeStory,
};

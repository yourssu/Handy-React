import { Meta, StoryObj } from '@storybook/react';

import { IcExternalLinkLine } from '@/style';

import { TextButton } from './TextButton';

const meta: Meta<typeof TextButton> = {
  title: 'Components/TextButton',
  component: TextButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      description: 'TextButton의 크기를 결정하는 속성',
      control: {
        type: 'radio',
      },
      options: ['xsmall', 'small', 'medium'],
    },
    variant: { description: 'TextButton의 위계를 결정하는 속성' },
    leftIcon: { description: 'TextButton의 왼쪽에 들어갈 아이콘' },
    children: { description: 'TextButton의 내용' },
    rightIcon: { description: 'TextButton의 오른쪽에 들어갈 아이콘' },
    width: { description: 'TextButton의 가로 길이' },
  },
};

export default meta;
type Story = StoryObj<typeof TextButton>;

export const Primary: Story = {
  args: {
    children: 'textPrimary/Small',
    size: 'small',
    variant: 'textPrimary',
    disabled: false,
    leftIcon: <IcExternalLinkLine />,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <TextButton size="medium" variant="textPrimary">
        medium
      </TextButton>
      <TextButton size="small" variant="textPrimary">
        small
      </TextButton>
      <TextButton size="xsmall" variant="textPrimary">
        xsmall
      </TextButton>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <TextButton size="medium" variant="textPrimary">
        textPrimary
      </TextButton>
      <TextButton size="medium" variant="textSecondary">
        textSecondary
      </TextButton>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'textPrimary/Disabled/Medium',
    size: 'medium',
    variant: 'textPrimary',
    disabled: true,
  },
};

export const Width: Story = {
  args: {
    children: 'textPrimary/Medium/500px',
    size: 'medium',
    variant: 'textPrimary',
    disabled: false,
    width: '500px',
  },
};

export const Click: Story = {
  args: {
    children: 'Click me!',
    size: 'medium',
    variant: 'textPrimary',
    disabled: false,
    onClick: () => {
      alert('TextButton을 클릭했습니다');
    },
  },
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <TextButton size="medium" variant="textPrimary" leftIcon={<IcExternalLinkLine />}>
        with leftIcon
      </TextButton>
      <TextButton size="medium" variant="textPrimary" disabled rightIcon={<IcExternalLinkLine />}>
        with rightIcon
      </TextButton>
    </div>
  ),
};

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
    hierarchy: { description: 'TextButton의 모양을 결정하는 속성' },
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
    children: 'Primary/Small',
    size: 'small',
    hierarchy: 'primary',
    disabled: false,
    leftIcon: <IcExternalLinkLine />,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <TextButton size="medium" hierarchy="primary">
        medium
      </TextButton>
      <TextButton size="small" hierarchy="primary">
        small
      </TextButton>
      <TextButton size="xsmall" hierarchy="primary">
        xsmall
      </TextButton>
    </div>
  ),
};

export const Hierarchies: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <TextButton size="medium" hierarchy="primary">
        primary
      </TextButton>
      <TextButton size="medium" hierarchy="secondary">
        secondary
      </TextButton>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Primary/Disabled/Medium',
    size: 'medium',
    hierarchy: 'primary',
    disabled: true,
  },
};

export const Width: Story = {
  args: {
    children: 'Primary/Medium/500px',
    size: 'medium',
    hierarchy: 'primary',
    disabled: false,
    width: '500px',
  },
};

export const Click: Story = {
  args: {
    children: 'Click me!',
    size: 'medium',
    hierarchy: 'primary',
    disabled: false,
    onClick: () => {
      alert('TextButton을 클릭했습니다');
    },
  },
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <TextButton size="medium" hierarchy="primary" leftIcon={<IcExternalLinkLine />}>
        with leftIcon
      </TextButton>
      <TextButton size="medium" hierarchy="primary" disabled rightIcon={<IcExternalLinkLine />}>
        with rightIcon
      </TextButton>
    </div>
  ),
};

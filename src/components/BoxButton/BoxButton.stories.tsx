import { Meta, StoryObj } from '@storybook/react';

import { IcExternalLinkLine } from '@/style';

import { BoxButton } from './BoxButton';

const meta: Meta<typeof BoxButton> = {
  title: 'Components/BoxButton',
  component: BoxButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: { description: 'BoxButton의 크기를 결정하는 속성' },
    hierarchy: { description: 'BoxButton의 모양을 결정하는 속성' },
    leftIcon: { description: 'BoxButton의 왼쪽에 들어갈 아이콘' },
    children: { description: 'BoxButton의 내용' },
    rightIcon: { description: 'BoxButton의 오른쪽에 들어갈 아이콘' },
    width: { description: 'BoxButton의 가로 크기' },
  },
};

export default meta;
type Story = StoryObj<typeof BoxButton>;

export const Primary: Story = {
  args: {
    children: 'Primary/Large',
    size: 'large',
    hierarchy: 'primary',
    disabled: false,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <BoxButton size="xlarge" hierarchy="primary">
        xlarge
      </BoxButton>
      <BoxButton size="large" hierarchy="primary">
        large
      </BoxButton>
      <BoxButton size="medium" hierarchy="primary">
        medium
      </BoxButton>
      <BoxButton size="small" hierarchy="primary">
        small
      </BoxButton>
      <BoxButton size="xsmall" hierarchy="primary">
        xsmall
      </BoxButton>
      <BoxButton size="xxsmall" hierarchy="primary">
        xxsmall
      </BoxButton>
    </div>
  ),
};

export const Hierarchies: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <BoxButton size="large" hierarchy="primary">
        primary
      </BoxButton>
      <BoxButton size="large" hierarchy="secondary">
        secondary
      </BoxButton>
      <BoxButton size="large" hierarchy="tertiary">
        tertiary
      </BoxButton>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Primary/Disabled/Large',
    size: 'large',
    hierarchy: 'primary',
    disabled: true,
  },
};

export const Width: Story = {
  args: {
    children: 'Primary/Large/500px',
    size: 'large',
    hierarchy: 'primary',
    disabled: false,
    width: '500px',
  },
};

export const Click: Story = {
  args: {
    children: 'Click me!',
    size: 'large',
    hierarchy: 'primary',
    disabled: false,
    onClick: () => {
      alert('BoxButton을 클릭했습니다');
    },
  },
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <BoxButton size="large" hierarchy="primary" leftIcon={<IcExternalLinkLine />}>
        with leftIcon
      </BoxButton>
      <BoxButton size="large" hierarchy="primary" disabled rightIcon={<IcExternalLinkLine />}>
        with rightIcon
      </BoxButton>
    </div>
  ),
};

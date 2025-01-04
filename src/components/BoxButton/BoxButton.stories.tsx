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
    variant: { description: 'BoxButton의 위계를 결정하는 속성' },
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
    children: 'filledPrimary/Large',
    size: 'large',
    variant: 'filledPrimary',
    disabled: false,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <BoxButton size="xlarge" variant="filledPrimary">
        xlarge
      </BoxButton>
      <BoxButton size="large" variant="filledPrimary">
        large
      </BoxButton>
      <BoxButton size="medium" variant="filledPrimary">
        medium
      </BoxButton>
      <BoxButton size="small" variant="filledPrimary">
        small
      </BoxButton>
      <BoxButton size="xsmall" variant="filledPrimary">
        xsmall
      </BoxButton>
      <BoxButton size="xxsmall" variant="filledPrimary">
        xxsmall
      </BoxButton>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <BoxButton size="large" variant="filledPrimary">
        filledPrimary
      </BoxButton>
      <BoxButton size="large" variant="filledSecondary">
        filledSecondary
      </BoxButton>
      <BoxButton size="large" variant="outlined">
        outlined
      </BoxButton>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'filledPrimary/Disabled/Large',
    size: 'large',
    variant: 'filledPrimary',
    disabled: true,
  },
};

export const Width: Story = {
  args: {
    children: 'filledPrimary/Large/500px',
    size: 'large',
    variant: 'filledPrimary',
    disabled: false,
    width: '500px',
  },
};

export const Click: Story = {
  args: {
    children: 'Click me!',
    size: 'large',
    variant: 'filledPrimary',
    disabled: false,
    onClick: () => {
      alert('BoxButton을 클릭했습니다');
    },
  },
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <BoxButton size="large" variant="filledPrimary" leftIcon={<IcExternalLinkLine />}>
        with leftIcon
      </BoxButton>
      <BoxButton size="large" variant="filledPrimary" disabled rightIcon={<IcExternalLinkLine />}>
        with rightIcon
      </BoxButton>
    </div>
  ),
};

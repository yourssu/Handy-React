import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { PasswordTextField } from './PasswordTextField';

const meta: Meta<typeof PasswordTextField> = {
  title: 'Atoms/TextField/PasswordTextField',
  component: PasswordTextField,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

const TextFieldStory = ({ ...textFieldProps }) => {
  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const newProps = { ...textFieldProps, value, onChange };
  return <PasswordTextField {...newProps} />;
};

type Story = StoryObj<typeof PasswordTextField>;
export const Primary: Story = {
  args: {
    fieldLabel: '필드 라벨',
    helperLabel: '도움말 텍스트',
    placeholder: '플레이스 홀더',
    disabled: false,
    isPositive: false,
    isNegative: false,
    isMarked: true,
    width: '350px',
  },
  render: TextFieldStory,
};

export const Disabled: Story = {
  args: {
    fieldLabel: '필드 라벨',
    helperLabel: '도움말 텍스트',
    placeholder: '플레이스 홀더',
    disabled: true,
    width: '350px',
  },
  render: TextFieldStory,
};

export const Positive: Story = {
  args: {
    fieldLabel: '필드 라벨',
    helperLabel: '도움말 텍스트',
    placeholder: '플레이스 홀더',
    disabled: false,
    isPositive: true,
    isMarked: false,
    width: '350px',
  },
  render: TextFieldStory,
};

export const Negative: Story = {
  args: {
    fieldLabel: '필드 라벨',
    helperLabel: '도움말 텍스트',
    placeholder: '플레이스 홀더',
    disabled: false,
    isNegative: true,
    isMarked: true,
    width: '350px',
  },
  render: TextFieldStory,
};

import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { SimpleTextField } from './SimpleTextField';

const meta: Meta<typeof SimpleTextField> = {
  title: 'Atoms/TextField/SimpleTextField',
  component: SimpleTextField,
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
  const onClickClearButton = () => {
    setValue('');
  };

  const newProps = { ...textFieldProps, value, onChange, onClickClearButton };
  return (
    <div style={{ width: '300px' }}>
      <SimpleTextField {...newProps} />
    </div>
  );
};

type Story = StoryObj<typeof SimpleTextField>;
export const Primary: Story = {
  args: {
    fieldLabel: '필드 라벨',
    helperLabel: '도움말 텍스트',
    placeholder: '플레이스 홀더',
    disabled: false,
    isPositive: false,
    isNegative: false,
  },
  render: TextFieldStory,
};

export const Disabled: Story = {
  args: {
    fieldLabel: '필드 라벨',
    helperLabel: '도움말 텍스트',
    placeholder: '플레이스 홀더',
    disabled: true,
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
  },
  render: TextFieldStory,
};

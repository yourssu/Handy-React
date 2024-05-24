import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { SearchTextField } from './SearchTextField';

const meta: Meta<typeof SearchTextField> = {
  title: 'Atoms/TextField/SearchTextField',
  component: SearchTextField,
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
  return <SearchTextField {...newProps} />;
};

type Story = StoryObj<typeof SearchTextField>;
export const Primary: Story = {
  args: {
    isFocused: false,
    isTyping: false,
    placeholder: '플레이스 홀더',
    disabled: false,
    width: '350px',
  },
  render: TextFieldStory,
};

export const Disabled: Story = {
  args: {
    placeholder: '플레이스 홀더',
    disabled: true,
    width: '350px',
  },
  render: TextFieldStory,
};

export const Focused: Story = {
  args: {
    isFocused: true,
    placeholder: '플레이스 홀더',
    disabled: false,
    width: '350px',
  },
  render: TextFieldStory,
};

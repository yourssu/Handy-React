// import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './Textarea';
import { TextareaProps } from './Textarea.type';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    width: {
      control: 'text',
      description: 'Textarea의 가로 길이',
    },
    height: {
      control: 'text',
      description: 'Textarea의 세로 길이',
    },
    placeholder: {
      control: 'text',
      description: 'Textarea의 placeholder 텍스트',
    },
    maxLength: {
      control: 'number',
      description: 'Textarea의 최대 입력 가능 글자 수',
    },
    helperText: {
      control: 'text',
      description: 'Textarea에 올바르게 입력할 수 있도록 돕는 텍스트',
    },
    disabled: {
      control: 'boolean',
      description: 'Textarea의 비활성화 여부',
    },
    error: {
      control: 'boolean',
      description: 'Textarea의 에러 여부',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    width: '343px',
    height: '187px',
    placeholder: 'Enter text here...',
    helperText: 'Text Inputting',
  },
};

export const Placeholder: Story = {
  args: {
    width: '343px',
    height: '187px',
    placeholder: 'Enter text here...',
  },
};

export const HelperText: Story = {
  args: {
    width: '343px',
    height: '187px',
    placeholder: 'Enter text here...',
    helperText: 'helperText입니다.',
  },
};

export const Disabled: Story = {
  args: {
    width: '343px',
    height: '187px',
    placeholder: 'This field is disabled',
    helperText: 'Text Inputting',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    width: '343px',
    height: '187px',
    error: true,
    placeholder: 'There is an error',
    helperText: 'Text Inputting',
  },
};

const MaxLengthTest = ({
  width = '343px',
  height = '187px',
  maxLength = 50,
  placeholder = 'Max 50 characters',
  helperText = '',
  disabled = false,
  error = false,
}: TextareaProps) => {
  return (
    <Textarea
      width={width}
      height={height}
      maxLength={maxLength}
      placeholder={placeholder}
      helperText={helperText}
      disabled={disabled}
      error={error}
    />
  );
};

export const MaxLength: Story = {
  render: MaxLengthTest,
};

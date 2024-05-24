import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { SuffixTextField } from './SuffixTextField';

const meta: Meta<typeof SuffixTextField> = {
  title: 'Atoms/TextField/SuffixTextField',
  component: SuffixTextField,
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
  return <SuffixTextField {...newProps} />;
};

type Story = StoryObj<typeof SuffixTextField>;
export const Primary: Story = {
  args: {
    fieldLabel: '필드 라벨',
    helperLabel: '도움말 텍스트',
    placeholder: '플레이스 홀더',
    disabled: false,
    isPositive: false,
    isNegative: false,
    width: '350px',
    suffix: '@soongsil.ac.kr',
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
    suffix: '@soongsil.ac.kr',
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
    width: '350px',
    suffix: '@soongsil.ac.kr',
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
    width: '350px',
    suffix: '@soongsil.ac.kr',
  },
  render: TextFieldStory,
};

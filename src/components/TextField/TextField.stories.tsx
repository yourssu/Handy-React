import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  args: {
    isError: false,
    disabled: false,
    placeholder: 'text here',
  },
  argTypes: {
    isError: {
      description: 'TextField의 에러 상태를 결정하는 속성',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: false },
      },
    },
    disabled: {
      description: 'TextField의 비활성화를 결정하는 속성',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: false },
      },
    },
    maxLength: {
      description: '입력할 수 있는 최대 길이를 지정하는 속성',
      control: { type: 'number' },
      table: {
        defaultValue: { summary: Infinity },
      },
    },
    placeholder: {
      description: 'TextField의 placeholder를 지정하는 속성',
      control: { type: 'text' },
    },
  },
};

export default meta;

const ControlComponent = (args: object) => {
  return (
    <TextField {...args}>
      <TextField.Label>Label</TextField.Label>
      <TextField.HelperText>Helper Text</TextField.HelperText>
    </TextField>
  );
};

const OnChangeComponent = () => {
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <span>입력한 텍스트: {value}</span>
      <br />
      <br />
      <TextField onChange={onChange} placeholder="이름을 입력해주세요...">
        <TextField.Label>Label</TextField.Label>
        <TextField.HelperText>Helper Text</TextField.HelperText>
      </TextField>
    </>
  );
};

const DefaultValueWithValueComponent = () => {
  const [value, setValue] = useState('김철수');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <TextField
      placeholder="이름을 입력해주세요..."
      value={value}
      defaultValue="홍길동"
      onChange={onChange}
    >
      <TextField.Label>이름</TextField.Label>
      <TextField.HelperText>신분증상 이름을 입력해주세요.</TextField.HelperText>
    </TextField>
  );
};

export const Control: StoryObj = {
  render: ControlComponent,
};

export const Usage: StoryObj = {
  render: () => <TextField />,
};

export const Placeholder: StoryObj = {
  render: () => <TextField placeholder="입력해주세요..." />,
};

export const Label: StoryObj = {
  render: () => (
    <TextField placeholder="이름을 입력해주세요...">
      <TextField.Label>이름</TextField.Label>
    </TextField>
  ),
};

export const HelperText: StoryObj = {
  render: () => (
    <>
      <TextField placeholder="이름을 입력해주세요...">
        <TextField.Label>이름</TextField.Label>
        <TextField.HelperText>신분증상 이름을 입력해주세요.</TextField.HelperText>
      </TextField>

      <br />
      <br />

      <TextField placeholder="이름을 입력해주세요...">
        <TextField.HelperText>신분증상 이름을 입력해주세요.</TextField.HelperText>
        <TextField.Label>이름</TextField.Label>
      </TextField>
    </>
  ),
};

export const MaxLength: StoryObj = {
  render: () => (
    <TextField placeholder="이름을 입력해주세요..." maxLength={10}>
      <TextField.HelperText>제가 대체됩니다!</TextField.HelperText>
    </TextField>
  ),
};

export const Error: StoryObj = {
  render: () => (
    <TextField placeholder="이름을 입력해주세요..." isError>
      <TextField.Label>이름</TextField.Label>
      <TextField.HelperText>신분증상 이름을 입력해주세요.</TextField.HelperText>
    </TextField>
  ),
};

export const Disabled: StoryObj = {
  render: () => (
    <>
      <TextField placeholder="이름을 입력해주세요..." disabled>
        <TextField.Label>이름</TextField.Label>
        <TextField.HelperText>신분증상 이름을 입력해주세요.</TextField.HelperText>
      </TextField>

      <br />
      <br />

      <TextField placeholder="이름을 입력해주세요..." disabled isError>
        <TextField.Label>이름</TextField.Label>
        <TextField.HelperText>신분증상 이름을 입력해주세요.</TextField.HelperText>
      </TextField>
    </>
  ),
};

export const OnClearButtonClick: StoryObj = {
  render: () => {
    const onClearButtonClick = () => {
      alert('삭제 버튼 클릭!');
    };

    return (
      <TextField placeholder="이름을 입력해주세요..." onClearButtonClick={onClearButtonClick}>
        <TextField.Label>이름</TextField.Label>
        <TextField.HelperText>신분증상 이름을 입력해주세요.</TextField.HelperText>
      </TextField>
    );
  },
};

export const OnChange: StoryObj = {
  render: OnChangeComponent,
};

export const DefaultValue: StoryObj = {
  render: () => (
    <TextField placeholder="이름을 입력해주세요..." defaultValue="홍길동">
      <TextField.Label>이름</TextField.Label>
      <TextField.HelperText>신분증상 이름을 입력해주세요.</TextField.HelperText>
    </TextField>
  ),
};

export const DefaultValueWithValue: StoryObj = {
  render: DefaultValueWithValueComponent,
};

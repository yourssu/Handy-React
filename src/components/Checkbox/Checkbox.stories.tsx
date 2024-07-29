import { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '@/components/Checkbox/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    size: 'medium',
    disabled: false,
  },
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: ['small', 'medium', 'large'],
    },
    selected: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    onChange: {
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    children: {
      description: 'React.ReactNode 타입의 children을 받습니다.',
      type: { name: 'other', value: '', required: true },
      control: {
        type: 'string',
      },
      defaultValue: '체크박스',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

const CheckboxStory = (args: object) => {
  return (
    <Checkbox size="medium" {...args} onChange={undefined}>
      체크박스
    </Checkbox>
  );
};

const Primary: StoryObj = {
  render: CheckboxStory,
};

const Default: StoryObj = {
  render: () => <Checkbox size="medium">기본 체크박스</Checkbox>,
};

const StateChange: StoryObj = {
  render: () => (
    <Checkbox
      size="medium"
      onChange={(e) => {
        alert('상태가 변경되었습니다: ' + e.currentTarget.checked);
      }}
    >
      상태 관리 체크박스
    </Checkbox>
  ),
};

const Sizes: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox size="small" selected>
        small
      </Checkbox>
      <Checkbox size="medium" selected>
        medium
      </Checkbox>
      <Checkbox size="large" selected>
        large
      </Checkbox>
    </div>
  ),
};

const Disabled: StoryObj = {
  render: () => (
    <>
      <Checkbox size="medium" disabled>
        변경 불가
      </Checkbox>
    </>
  ),
};

export default meta;
export { Primary, Default, StateChange, Sizes, Disabled };

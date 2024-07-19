import { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '@/components/Checkbox/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
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
    <Checkbox {...args} onChange={undefined}>
      체크박스
    </Checkbox>
  );
};

const Primary: StoryObj = {
  render: CheckboxStory,
};

export default meta;
export { Primary };

import { Meta, StoryObj } from '@storybook/react';

import { RadioGroupItemProps, RadioGroupProps } from '@/components/RadioGroup/RadioGroup.type';
import { useRadioGroup } from '@/components/RadioGroup/hooks/useRadioGroup';

const meta: Meta<RadioGroupProps<string> & RadioGroupItemProps<string>> = {
  title: 'Components/RadioGroup',
  parameters: {
    layout: 'centered',
  },
  args: {
    size: 'medium',
    orientation: 'vertical',
  },
  argTypes: {
    size: {
      description: 'RadioGroup.Item의 크기를 정합니다.',
      control: {
        type: 'radio',
      },
      options: ['small', 'medium', 'large'],
    },
    onValueChange: {
      description: '선택된 RadioGroup.Item이 바뀔 때 호출되는 함수입니다.',
    },
    orientation: {
      description: 'RadioGroup.Item이 나열되는 방향을 정합니다.',
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'vertical' },
      },
      options: ['vertical', 'horizontal'],
    },
  },
};

export default meta;

const ControlComponent = (args: object) => {
  const RadioGroup = useRadioGroup<'item-1' | 'item-2' | 'item-3'>('item-1');

  return (
    <RadioGroup orientation="vertical" size="large" {...args}>
      <RadioGroup.Item value="item-1">Item1</RadioGroup.Item>
      <RadioGroup.Item value="item-2">Item2</RadioGroup.Item>
      <RadioGroup.Item value="item-3">Item3</RadioGroup.Item>
    </RadioGroup>
  );
};

export const Control: StoryObj = {
  render: ControlComponent,
};

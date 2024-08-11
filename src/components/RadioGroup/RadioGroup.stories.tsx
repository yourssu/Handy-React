import { Meta, StoryObj } from '@storybook/react';

import {
  RadioGroupItemProps,
  RadioGroupProps,
  RadioGroupValueChangeEvent,
} from '@/components/RadioGroup/RadioGroup.type';
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

const UsageComponent = () => {
  const RadioGroup = useRadioGroup<'한국어' | '영어' | '일본어'>();

  return (
    <RadioGroup size="medium">
      <RadioGroup.Item value="한국어">한국어</RadioGroup.Item>
      <RadioGroup.Item value="영어">영어</RadioGroup.Item>
      <RadioGroup.Item value="일본어">일본어</RadioGroup.Item>
    </RadioGroup>
  );
};

const UsageDefaultComponent = () => {
  const RadioGroup = useRadioGroup<'한국어' | '영어' | '일본어'>('한국어');

  return (
    <RadioGroup size="medium">
      <RadioGroup.Item value="한국어">한국어</RadioGroup.Item>
      <RadioGroup.Item value="영어">영어</RadioGroup.Item>
      <RadioGroup.Item value="일본어">일본어</RadioGroup.Item>
    </RadioGroup>
  );
};

const SizeComponent = () => {
  const RadioGroup = useRadioGroup<'한국어' | '영어' | '일본어'>();

  return (
    <div style={{ display: 'flex', gap: 48 }}>
      <RadioGroup size="small">
        <div>- small</div>
        <RadioGroup.Item value="한국어">한국어</RadioGroup.Item>
        <RadioGroup.Item value="영어">영어</RadioGroup.Item>
        <RadioGroup.Item value="일본어">일본어</RadioGroup.Item>
      </RadioGroup>
      <RadioGroup size="medium">
        <div>- medium</div>
        <RadioGroup.Item value="한국어">한국어</RadioGroup.Item>
        <RadioGroup.Item value="영어">영어</RadioGroup.Item>
        <RadioGroup.Item value="일본어">일본어</RadioGroup.Item>
      </RadioGroup>
      <RadioGroup size="large">
        <div>- large</div>
        <RadioGroup.Item value="한국어">한국어</RadioGroup.Item>
        <RadioGroup.Item value="영어">영어</RadioGroup.Item>
        <RadioGroup.Item value="일본어">일본어</RadioGroup.Item>
      </RadioGroup>
    </div>
  );
};

const OrientationComponent = () => {
  const RadioGroup = useRadioGroup<'한국어' | '영어' | '일본어'>();

  return (
    <div style={{ display: 'flex', gap: 80 }}>
      <RadioGroup size="small">
        <RadioGroup.Item value="한국어">한국어</RadioGroup.Item>
        <RadioGroup.Item value="영어">영어</RadioGroup.Item>
        <RadioGroup.Item value="일본어">일본어</RadioGroup.Item>
      </RadioGroup>
      <RadioGroup size="small" orientation="vertical">
        <RadioGroup.Item value="한국어">한국어</RadioGroup.Item>
        <RadioGroup.Item value="영어">영어</RadioGroup.Item>
        <RadioGroup.Item value="일본어">일본어</RadioGroup.Item>
      </RadioGroup>
      <RadioGroup size="small" orientation="horizontal">
        <RadioGroup.Item value="한국어">한국어</RadioGroup.Item>
        <RadioGroup.Item value="영어">영어</RadioGroup.Item>
        <RadioGroup.Item value="일본어">일본어</RadioGroup.Item>
      </RadioGroup>
    </div>
  );
};

const EventComponent = () => {
  const RadioGroup = useRadioGroup<'한국어' | '영어' | '일본어'>('한국어');

  const onValueChange = (e: RadioGroupValueChangeEvent<'한국어' | '영어' | '일본어'>) => {
    const { value, event } = e;
    alert(`선택된 값: ${value}`);
    console.log(event);
  };

  return (
    <RadioGroup size="medium" onValueChange={onValueChange}>
      <RadioGroup.Item value="한국어">한국어입니다</RadioGroup.Item>
      <RadioGroup.Item value="영어">영어입니다</RadioGroup.Item>
      <RadioGroup.Item value="일본어">일본어입니다</RadioGroup.Item>
    </RadioGroup>
  );
};

const DisabledComponent = () => {
  const RadioGroup = useRadioGroup<'한국어' | '영어' | '일본어'>();

  return (
    <RadioGroup size="medium">
      <RadioGroup.Item value="한국어">한국어</RadioGroup.Item>
      <RadioGroup.Item value="영어" disabled>
        영어
      </RadioGroup.Item>
      <RadioGroup.Item value="일본어">일본어</RadioGroup.Item>
    </RadioGroup>
  );
};

export const Control: StoryObj = {
  render: ControlComponent,
};

export const Usage: StoryObj = {
  render: UsageComponent,
};

export const UsageDefault: StoryObj = {
  render: UsageDefaultComponent,
};

export const Size: StoryObj = {
  render: SizeComponent,
};

export const Orientation: StoryObj = {
  render: OrientationComponent,
};

export const Disabled: StoryObj = {
  render: DisabledComponent,
};

export const Event: StoryObj = {
  render: EventComponent,
};

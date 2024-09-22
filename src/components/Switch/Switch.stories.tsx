import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Switch } from './Switch';
import { SwitchProps } from './Switch.type';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isDisabled: { description: 'Switch의 비활성화 여부를 결정하는 속성' },
    defaultSelected: { description: 'Switch의 초기 선택 여부를 나타내는 속성' },
    size: {
      description: 'Switch의 크기를 결정하는 속성',
      control: {
        type: 'radio',
      },
      options: ['small', 'medium', 'large'],
    },
    onSelectedChange: {
      description: 'Switch의 선택 여부가 변경될 때 수행할 콜백 함수',
    },
  },
};
export default meta;

const SwitchStory = ({ isDisabled, defaultSelected, size }: SwitchProps) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <span>switch label</span>
      <Switch isDisabled={isDisabled} defaultSelected={defaultSelected} size={size} />
    </div>
  );
};

type Story = StoryObj<typeof Switch>;
export const Primary: Story = {
  args: {
    isDisabled: false,
    defaultSelected: false,
    size: 'large',
  },
  render: SwitchStory,
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '30px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <span>Switch/Large</span>
        <Switch size="large" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <span>Switch/Medium</span>
        <Switch size="medium" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <span>Switch/Small</span>
        <Switch size="small" />
      </div>
    </div>
  ),
};

export const Selected: Story = {
  args: {
    isDisabled: false,
    defaultSelected: true,
    size: 'large',
  },
  render: SwitchStory,
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    defaultSelected: false,
    size: 'large',
  },
  render: SwitchStory,
};

export const DisabledSelected: Story = {
  args: {
    isDisabled: true,
    defaultSelected: true,
    size: 'large',
  },
  render: SwitchStory,
};

const SwitchClickStory = () => {
  const [selected, setSelected] = useState(false);

  const handleClick = (selected: boolean) => setSelected(selected);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <span>{selected ? 'on' : 'off'}</span>
      <Switch size="large" defaultSelected={selected} onSelectedChange={handleClick} />
    </div>
  );
};

export const Click: Story = {
  render: SwitchClickStory,
};

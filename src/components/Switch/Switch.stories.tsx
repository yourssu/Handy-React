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
    isSelected: { description: 'Switch의 선택 여부를 나타내는 속성' },
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

const SwitchStory = ({ isDisabled, isSelected, size }: SwitchProps) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <span>switch label</span>
      <Switch isDisabled={isDisabled} isSelected={isSelected} size={size} />
    </div>
  );
};

type Story = StoryObj<typeof Switch>;
export const Primary: Story = {
  args: {
    isDisabled: false,
    isSelected: false,
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
    isSelected: true,
    size: 'large',
  },
  render: SwitchStory,
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    isSelected: false,
    size: 'large',
  },
  render: SwitchStory,
};

export const DisabledSelected: Story = {
  args: {
    isDisabled: true,
    isSelected: true,
    size: 'large',
  },
  render: SwitchStory,
};

const SwitchChangeStory = () => {
  const handleChange = (selected: boolean) => alert(`현재 Switch의 상태: ${selected}`);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <span>click switch</span>
      <Switch size="large" onSelectedChange={handleChange} />
    </div>
  );
};

export const Change: Story = {
  render: SwitchChangeStory,
};

const ExternalChangeStory = () => {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={() => setIsSelected(false)}>switch off</button>
        <button onClick={() => setIsSelected(true)}>switch on</button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <span>switch label</span>
        <Switch
          isSelected={isSelected}
          size={'large'}
          onSelectedChange={(selected) => setIsSelected(selected)}
        />
      </div>
    </div>
  );
};

export const ExternalChange: Story = {
  render: ExternalChangeStory,
};

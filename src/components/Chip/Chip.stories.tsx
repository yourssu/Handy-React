import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { IcArrowDownLine, IcInfoCircleLine } from '@/style';

import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  args: {
    size: 'medium',
    role: 'suggestion',
    disabled: false,
    selected: false,
  },
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: ['small', 'medium'],
    },
    role: {
      control: {
        type: 'radio',
      },
      options: ['suggestion', 'input', 'filter'],
      description:
        'Chip의 용법을 설정합니다. "group"은 ChipGroup 컴포넌트의 자식일때만 사용가능합니다. "input"은 selected를 true로 설정할 수 없습니다.',
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
        type: 'text',
      },
      defaultValue: '체크박스',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

const ControlComponent = (args: object) => {
  return (
    <Chip size="medium" role="suggestion" {...args}>
      Chip
    </Chip>
  );
};

const DefaultUsageComponent = () => {
  return (
    <Chip size="medium" role="suggestion">
      칩
    </Chip>
  );
};

const Control: StoryObj = {
  render: ControlComponent,
};

const DefaultUsage: StoryObj = {
  render: DefaultUsageComponent,
};

const Role: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Chip size="medium" role="input">
        input
      </Chip>

      <Chip size="medium" role="filter">
        filter
      </Chip>

      <Chip size="medium" role="suggestion">
        suggestion
      </Chip>
    </div>
  ),
};

const RoleInput: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Chip size="medium" role="input">
        No Interaction
      </Chip>

      <Chip size="medium" role="input" onClick={() => {}}>
        Can Interaction
      </Chip>

      <Chip size="medium" role="input" onClick={() => alert('클릭했습니다')}>
        Alert
      </Chip>
    </div>
  ),
};

const RemovableChip: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Chip size="medium" role="suggestion">
        <Chip.Content>삭제 가능한 칩1</Chip.Content>
        <Chip.Remove />
      </Chip>
      <Chip size="medium" role="suggestion">
        <Chip.Remove />
        <Chip.Content>삭제 가능한 칩2</Chip.Content>
      </Chip>
      <Chip size="medium" role="suggestion">
        <Chip.Remove />
        삭제 가능한 칩3
      </Chip>
    </div>
  ),
};

const EventRemovableChipComponent = () => {
  const onRemoveClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.currentTarget as HTMLDivElement).closest('.chip') as HTMLDivElement;
    alert(`삭제되었습니다: ${target.dataset.chip}`);
  };

  return (
    <Chip size="medium" role="suggestion" data-chip="2024">
      이벤트가 달린 삭제 가능한 칩
      <Chip.Remove onClick={onRemoveClick} />
    </Chip>
  );
};

const EventRemovableChip: StoryObj = {
  render: EventRemovableChipComponent,
};

const IconChip: StoryObj = {
  render: () => (
    <Chip size="medium" role="suggestion">
      <Chip.Icon>
        <IcInfoCircleLine />
      </Chip.Icon>
      <Chip.Content>아이콘 추가</Chip.Content>
    </Chip>
  ),
};

const IconOrderChip: StoryObj = {
  render: () => (
    <Chip size="medium" role="suggestion">
      <Chip.Icon position="left">
        <IcInfoCircleLine />
      </Chip.Icon>
      <Chip.Icon position="right">
        <IcArrowDownLine />
      </Chip.Icon>
      <Chip.Icon position="right">
        <IcArrowDownLine />
      </Chip.Icon>
      <Chip.Content>아이콘 순서 변경</Chip.Content>
    </Chip>
  ),
};

const ChipDisabled: StoryObj = {
  render: () => (
    <Chip size="medium" role="suggestion" disabled>
      변경 불가
    </Chip>
  ),
};

const StateManagementComponent = () => {
  const [selected, setSelected] = useState(false);

  const onClick = () => {
    setSelected((prev) => !prev);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <div>selected: {selected.toString()}</div>
      <Chip size="medium" role="suggestion" selected={selected} onClick={onClick}>
        상태 관리 칩
      </Chip>
    </div>
  );
};

const StateManagement: StoryObj = {
  render: StateManagementComponent,
};

export default meta;
export {
  Control,
  DefaultUsage,
  Role,
  RoleInput,
  ChipDisabled,
  StateManagement,
  RemovableChip,
  EventRemovableChip,
  IconChip,
  IconOrderChip,
};

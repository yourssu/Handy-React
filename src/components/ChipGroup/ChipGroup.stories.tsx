import { useRef, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Chip } from '@/components/Chip/Chip';
import { ChipGroup } from '@/components/ChipGroup/ChipGroup';
import { ChipGroupRefPayloadType } from '@/components/ChipGroup/ChipGroup.type';

const meta: Meta<typeof ChipGroup> = {
  title: 'Components/ChipGroup',
  component: ChipGroup,
  args: {
    role: 'suggestion',
    swipable: false,
  },
  argTypes: {
    role: {
      control: {
        type: 'radio',
      },
      options: ['suggestion', 'input', 'filter'],
      description: '자식 Chip 컴포넌트들에 공통으로 적용될 용법을 설정합니다.',
    },
    swipable: {
      control: {
        type: 'boolean',
      },
      description:
        '마우스로 가로 스와이프 제스처를 사용할 수 있도록 설정합니다. 또한 트랙패드를 이용하여 가로 스크롤을 할 수 있습니다. 모바일 제스처와 충돌이 발생하지 않습니다.',
    },
    onSelectedChange: {
      description: 'Chip들의 선택이 변경될 때 호출되는 콜백함수입니다.',
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
};

const ControlComponent = (args: object) => {
  return (
    <div style={{ padding: '0 10vw' }}>
      <ChipGroup role="suggestion" {...args}>
        {Array.from({ length: 30 }, (_, idx) => (
          <Chip size="medium" role="group" key={idx}>
            {idx + 1}
          </Chip>
        ))}
      </ChipGroup>
    </div>
  );
};

const Control: StoryObj = {
  render: ControlComponent,
  parameters: {
    layout: 'fullscreen',
  },
};

const DefaultUsage1: StoryObj = {
  render: () => (
    <ChipGroup role="suggestion">
      <Chip size="medium" role="group">
        suggestion1
      </Chip>
      <Chip size="medium" role="group">
        suggestion2
      </Chip>
      <Chip size="medium" role="group">
        suggestion3
      </Chip>
    </ChipGroup>
  ),
};

const DefaultUsage2: StoryObj = {
  render: () => (
    <ChipGroup role="filter">
      <Chip size="medium" role="group">
        filter1
      </Chip>
      <Chip size="medium" role="group">
        filter2
      </Chip>
      <Chip size="medium" role="group">
        filter3
      </Chip>
    </ChipGroup>
  ),
};

const DefaultUsage3: StoryObj = {
  render: () => (
    <ChipGroup role="input">
      <Chip size="medium" role="group">
        input1
      </Chip>
      <Chip size="medium" role="group">
        input2
      </Chip>
      <Chip size="medium" role="group">
        input3
      </Chip>
    </ChipGroup>
  ),
};

const Swipable: StoryObj = {
  render: () => {
    return (
      <div style={{ padding: '0 11vw' }}>
        <ChipGroup role="input" swipable>
          {Array.from({ length: 10 }).map((_, i) => (
            <Chip size="medium" key={i} role="group">
              input{i + 1}
            </Chip>
          ))}
        </ChipGroup>
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const OnSelectedChangeComponent = () => {
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  const onSelectedChange = (selected: HTMLDivElement[]) => {
    setSelectedChips(selected.map((chip) => chip.dataset.chip!));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <div>선택된 칩: {selectedChips.toString()}</div>

      <ChipGroup role="filter" onSelectedChange={onSelectedChange}>
        <Chip size="medium" role="group" data-chip="1">
          filter1
        </Chip>
        <Chip size="medium" role="group" data-chip="2">
          filter2
        </Chip>
        <Chip size="medium" role="group" data-chip="3">
          filter3
        </Chip>
      </ChipGroup>
    </div>
  );
};

const OnSelectedChange: StoryObj = {
  render: OnSelectedChangeComponent,
};

const RefComponent = () => {
  const ref = useRef<ChipGroupRefPayloadType>(null);

  const onReset = () => {
    ref.current?.clearAllSelected();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <button onClick={onReset}>선택 초기화</button>

      <ChipGroup ref={ref} role="filter">
        <Chip size="medium" role="group">
          filter1
        </Chip>
        <Chip size="medium" role="group">
          filter2
        </Chip>
        <Chip size="medium" role="group">
          filter3
        </Chip>
      </ChipGroup>
    </div>
  );
};

const Ref: StoryObj = {
  render: RefComponent,
};

const SelectAllComponent = () => {
  const ref = useRef<ChipGroupRefPayloadType>(null);
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  const onSelectAll = () => {
    ref.current?.chipRefs.current.forEach((chipRef) => {
      chipRef.setInnerSelected(true);
    });
  };

  const onSelectedChange = (selected: HTMLDivElement[]) => {
    setSelectedChips(selected.map((chip) => chip.id));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <button onClick={onSelectAll}>전부 선택</button>

      <div>선택된 칩 아이디: {selectedChips.toString()}</div>

      <ChipGroup ref={ref} role="filter" onSelectedChange={onSelectedChange}>
        <Chip size="medium" role="group" id="1">
          filter1
        </Chip>
        <Chip size="medium" role="group" id="2">
          filter2
        </Chip>
        <Chip size="medium" role="group" id="3">
          filter3
        </Chip>
      </ChipGroup>
    </div>
  );
};

const SelectAll: StoryObj = {
  render: SelectAllComponent,
};

export default meta;
export {
  Control,
  DefaultUsage1,
  DefaultUsage2,
  DefaultUsage3,
  Swipable,
  OnSelectedChange,
  Ref,
  SelectAll,
};

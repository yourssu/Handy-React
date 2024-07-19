import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { ChipGroup } from '@/components/ChipGroup/ChipGroup';
import { IcInfoCircleLine } from '@/style';

import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  // argTypes: {
  //   size: {
  //     control: {
  //       type: 'radio',
  //     },
  //     options: ['small', 'medium', 'large'],
  //   },
  //   selected: {
  //     control: {
  //       type: 'boolean',
  //     },
  //   },
  //   children: {
  //     description: 'React.ReactNode 타입의 children을 받습니다.',
  //     type: { name: 'other', value: '', required: true },
  //     control: {
  //       type: 'string',
  //     },
  //     defaultValue: '체크박스',
  //   },
  // },
  parameters: {
    layout: 'centered',
  },
};

const DragComponent = () => {
  const [items, setItems] = useState([
    'Chip1',
    'Chip2',
    'Chip3',
    'Chip4',
    'Chip5',
    'Chip6',
    'Chip7',
    'Chip8',
    'Chip9',
    'Chip10',
  ]);

  return (
    <ChipGroup drag dragItems={items} dragItemSetter={setItems}>
      {items.map((item) => (
        <Chip key={item} role="suggestion" selected>
          <Chip.Icon position="left">
            <IcInfoCircleLine />
          </Chip.Icon>
          <Chip.Content>{item}</Chip.Content>
          <Chip.Remove />
        </Chip>
      ))}
    </ChipGroup>
  );
};

const Primary: StoryObj = {
  render: DragComponent,
};

export default meta;
export { Primary };

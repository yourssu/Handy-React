import { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Picker } from './Picker';

import { PickerColumn } from '.';

const meta: Meta<typeof Picker> = {
  title: 'Atoms/Picker',
  component: Picker,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Picker>;

const options = [
  {
    label: '2022',
    value: 'v2022',
  },
  {
    label: '2023',
    value: 'v2023',
  },
  {
    label: '2024',
    value: 'v2024',
  },
  {
    label: '2025',
    value: 'v2025',
  },
  {
    label: '2026',
    value: 'v2026',
  },
  {
    label: '2027',
    value: 'v2027',
  },
  {
    label: '2028',
    value: 'v2028',
  },
  {
    label: '2029',
    value: 'v2029',
  },
  {
    label: '2030',
    value: 'v2030',
  },
];

const Example = () => {
  const [value, setValue] = useState('v2022');
  const [value2, setValue2] = useState('v2022');
  const [value3, setValue3] = useState('v2022');

  return (
    <Picker>
      <PickerColumn options={options} value={value} onChange={(e) => setValue(e.target.value)} />
      <PickerColumn options={options} value={value2} onChange={(e) => setValue2(e.target.value)} />
      <PickerColumn options={options} value={value3} onChange={(e) => setValue3(e.target.value)} />
    </Picker>
  );
};

export const Primary: Story = {
  render: Example,
};

const DateExample = () => {
  const [amPm, setAmPm] = useState('am');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');

  const amPms = [
    {
      label: '오전',
      value: 'am',
    },
    {
      label: '오후',
      value: 'pm',
    },
  ];

  const hours = Array.from({ length: 12 }, (_, i) => {
    const value = i + 1;
    return {
      label: `${value}`,
      value: `${value}`,
    };
  });

  const minutes = Array.from({ length: 12 }, (_, i) => {
    const value = `${i * 5}`.padStart(2, '0');
    return {
      label: `${value}`,
      value: `${value}`,
    };
  });

  return (
    <Picker>
      <PickerColumn options={amPms} value={amPm} onChange={(e) => setAmPm(e.target.value)} />
      <PickerColumn options={hours} value={hour} onChange={(e) => setHour(e.target.value)} />
      <PickerColumn options={minutes} value={minute} onChange={(e) => setMinute(e.target.value)} />
    </Picker>
  );
};

export const Date: Story = {
  render: DateExample,
};

export const WithBackground: Story = {
  render: () => (
    <div style={{ background: '#f0f0f0', width: '500px' }}>
      <Picker>
        <PickerColumn options={options} value={'v2022'} onChange={() => {}} />
        <PickerColumn options={options} value={'v2022'} onChange={() => {}} />
        <PickerColumn options={options} value={'v2022'} onChange={() => {}} />
      </Picker>
    </div>
  ),
};

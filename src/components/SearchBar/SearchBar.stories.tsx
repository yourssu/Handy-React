import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

const WithClearButtonComponent = () => {
  const [value, setValue] = useState('');

  return (
    <SearchBar>
      <SearchBar.Input
        placeholder="검색어를 입력해주세요"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <SearchBar.ClearButton onClick={() => setValue('')} />
    </SearchBar>
  );
};

export const Primary: Story = {
  render: () => (
    <SearchBar>
      <SearchBar.Input placeholder="검색어를 입력해주세요" />
    </SearchBar>
  ),
};

export const WithClearButton: Story = {
  render: WithClearButtonComponent,
};

export const Width: Story = {
  render: () => (
    <div style={{ width: '800px' }}>
      <SearchBar>
        <SearchBar.Input placeholder="검색어를 입력해주세요" />
      </SearchBar>
    </div>
  ),
};

export const Form: Story = {
  render: () => (
    <SearchBar onSubmit={() => alert('제출')}>
      <SearchBar.Input placeholder="검색어를 입력해주세요" />
    </SearchBar>
  ),
};

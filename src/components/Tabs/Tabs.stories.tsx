import { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './Tabs';
import { TabsProps } from './Tabs.type';

const meta: Meta<TabsProps> = {
  title: 'Atoms/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    defaultTab: {
      description: '기본으로 설정될 Tabs.Tab 컴포넌트의 id',
    },
    scrollable: {
      control: {
        type: 'boolean',
      },
      description: 'Tabs.List의 가로 스크롤 가능 여부',
    },
  },
};

export default meta;
type Story = StoryObj<TabsProps>;

export const Scrollable: Story = {
  render: () => (
    <Tabs defaultTab="tab-0">
      <Tabs.List>
        <Tabs.Tab id="tab-0">전체</Tabs.Tab>
        <Tabs.Tab id="tab-1">Web</Tabs.Tab>
        <Tabs.Tab id="tab-2">iOS</Tabs.Tab>
        <Tabs.Tab id="tab-3">Android</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab-0">'전체' 탭 조회중</Tabs.Panel>
      <Tabs.Panel value="tab-1">'Web' 탭 조회중</Tabs.Panel>
      <Tabs.Panel value="tab-2">'iOS' 탭 조회중</Tabs.Panel>
      <Tabs.Panel value="tab-3">'Android' 탭 조회중</Tabs.Panel>
    </Tabs>
  ),
};

export const ChangeDefault: Story = {
  render: () => (
    <Tabs defaultTab="tab-3">
      <Tabs.List>
        <Tabs.Tab id="tab-0">전체</Tabs.Tab>
        <Tabs.Tab id="tab-1">Web</Tabs.Tab>
        <Tabs.Tab id="tab-2">iOS</Tabs.Tab>
        <Tabs.Tab id="tab-3">Android</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab-0">'전체' 탭 조회중</Tabs.Panel>
      <Tabs.Panel value="tab-1">'Web' 탭 조회중</Tabs.Panel>
      <Tabs.Panel value="tab-2">'iOS' 탭 조회중</Tabs.Panel>
      <Tabs.Panel value="tab-3">'Android' 탭 조회중</Tabs.Panel>
    </Tabs>
  ),
};

export const FixedTab: Story = {
  render: () => (
    <div
      style={{
        border: '1px solid lightgray',
        borderRadius: '10px',
        padding: '10px 0',
        width: '390px',
      }}
    >
      <Tabs defaultTab="tab-0" scrollable={false}>
        <Tabs.List>
          <Tabs.Tab id="tab-0">전체</Tabs.Tab>
          <Tabs.Tab id="tab-1">Web</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab-0">'전체' 탭 조회중</Tabs.Panel>
        <Tabs.Panel value="tab-1">'Web' 탭 조회중</Tabs.Panel>
      </Tabs>
    </div>
  ),
};

export const Click: Story = {
  render: () => (
    <div
      style={{
        border: '1px solid lightgray',
        borderRadius: '10px',
        padding: '10px 0',
        width: '390px',
      }}
    >
      <Tabs defaultTab="tab-0" scrollable={false}>
        <Tabs.List>
          <Tabs.Tab id="tab-0">전체</Tabs.Tab>
          <Tabs.Tab id="tab-1" onClick={() => alert(`'Web' 탭을 클릭하셨군요!`)}>
            Web
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab-0">'Web' 탭을 클릭해보세요!</Tabs.Panel>
        <Tabs.Panel value="tab-1">'Web' 탭 조회중</Tabs.Panel>
      </Tabs>
    </div>
  ),
};

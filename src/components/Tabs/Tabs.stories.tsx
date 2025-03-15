import { Meta, StoryObj } from '@storybook/react';

import { TabListProps, TabSize, TabsProps } from './Tabs.type';
import { useTabs } from './hooks/useTabs';

const meta: Meta<TabsProps & TabListProps> = {
  title: 'Components/Tabs',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    defaultTab: {
      description: '기본으로 설정될 Tabs.Tab의 id',
    },
    scrollable: {
      control: {
        type: 'boolean',
      },
      description: 'Tabs.List의 가로 스크롤 가능 여부',
    },
    size: {
      control: {
        type: 'radio',
      },
      options: ['small', 'large'],
      description: 'Tabs.Tab의 텍스트 크기를 지정하는 **Tabs.List의** 프로퍼티',
    },
  },
};

export default meta;
type Story = StoryObj<TabsProps>;
type TabType = 'tab-0' | 'tab-1' | 'tab-2' | 'tab-3';

const TabsTest = ({ defaultTab, size = 'large' }: { defaultTab: TabType; size?: TabSize }) => {
  const [Tabs] = useTabs<TabType>({ defaultTab, scrollable: true });
  return (
    <Tabs>
      <Tabs.List size={size}>
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
  );
};

export const Scrollable: Story = {
  render: () => <TabsTest defaultTab="tab-0" />,
};

export const ScrollableSize: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '50px' }}>
      <div>
        <h4> size='large' (B1_Sb_16) </h4>
        <TabsTest defaultTab="tab-0" />
      </div>
      <div>
        <h4> size='small' (B3_Sb_14) </h4>
        <TabsTest defaultTab="tab-0" size="small" />
      </div>
    </div>
  ),
};

export const ChangeDefault: Story = {
  render: () => <TabsTest defaultTab="tab-3" />,
};

const FixedTabsTest = ({ defaultTab }: { defaultTab: TabType }) => {
  const [Tabs] = useTabs<TabType>({ defaultTab, scrollable: false });
  return (
    <div
      style={{
        border: '1px solid lightgray',
        borderRadius: '10px',
        padding: '10px 0',
        width: '390px',
      }}
    >
      <Tabs>
        <Tabs.List>
          <Tabs.Tab id="tab-0">전체</Tabs.Tab>
          <Tabs.Tab id="tab-1">Web</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab-0">'전체' 탭 조회중</Tabs.Panel>
        <Tabs.Panel value="tab-1">'Web' 탭 조회중</Tabs.Panel>
      </Tabs>
    </div>
  );
};
export const TabComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '50px' }}>
      <div>
        <h4> Scrollable Tab </h4>
        <TabsTest defaultTab="tab-0" />
      </div>
      <div>
        <h4> Fixed Tab </h4>
        <FixedTabsTest defaultTab="tab-0" />
      </div>
    </div>
  ),
};

const TabsClickTest = ({ defaultTab }: { defaultTab: TabType }) => {
  const [Tabs] = useTabs<TabType>({ defaultTab, scrollable: false });
  return (
    <div
      style={{
        border: '1px solid lightgray',
        borderRadius: '10px',
        padding: '10px 0',
        width: '390px',
      }}
    >
      <Tabs>
        <Tabs.List>
          <Tabs.Tab id="tab-0">전체</Tabs.Tab>
          <Tabs.Tab id="tab-1" onClick={() => alert('Web 탭을 클릭하셨군요!')}>
            Web
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab-0">'Web' 탭을 클릭해보세요!</Tabs.Panel>
        <Tabs.Panel value="tab-1">'Web' 탭 조회중</Tabs.Panel>
      </Tabs>
    </div>
  );
};
export const Click: Story = {
  render: () => <TabsClickTest defaultTab="tab-0" />,
};

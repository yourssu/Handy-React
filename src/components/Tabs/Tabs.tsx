import React, { Children, useContext, useState } from 'react';

import { TabContext } from './Tab.context';
import { StyledFixedTab, StyledList, StyledScrollableTab } from './Tabs.style';
import { TabListProps, TabPanelProps, TabProps, TabsProps } from './Tabs.type';

export const Tabs = ({ scrollable = true, children, defaultTab }: TabsProps) => {
  const [currentTab, setCurrentTab] = useState<string>(defaultTab);
  const onChange = (id: string) => {
    setCurrentTab(id);
  };

  return (
    <TabContext.Provider value={{ scrollable, currentTab, setCurrentTab: onChange }}>
      {children}
    </TabContext.Provider>
  );
};

const List = ({ children }: TabListProps) => {
  const validChildren = Children.toArray(children);
  if (validChildren.length === 0)
    throw new Error('List 컴포넌트 안에 Tab 컴포넌트를 1개 이상 넣어주세요');

  const { scrollable } = useContext(TabContext) ?? { scrollable: true };
  return (
    <StyledList role="tablist" $scrollable={scrollable}>
      {children}
    </StyledList>
  );
};

const Tab = ({ children, id, onClick }: TabProps) => {
  const { scrollable, currentTab, setCurrentTab } = useContext(TabContext) ?? {
    scrollable: true,
    currentTab: undefined,
    setCurrentTab: undefined,
  };

  const onClickWrapper = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setCurrentTab?.(id);
    onClick?.(event);
  };

  const StyledTab = scrollable ? StyledScrollableTab : StyledFixedTab;
  return (
    <StyledTab
      role="tab"
      onClick={onClickWrapper}
      $isSelected={currentTab === id}
      aria-selected={currentTab === id}
    >
      {children}
    </StyledTab>
  );
};

const Panel = ({ children, value }: TabPanelProps) => {
  const { currentTab } = useContext(TabContext) ?? { currentTab: undefined };

  if (currentTab !== value) return;
  return (
    <div role="tabpanel" aria-labelledby={value}>
      {children}
    </div>
  );
};

Tabs.List = List;
Tabs.Tab = Tab;
Tabs.Panel = Panel;

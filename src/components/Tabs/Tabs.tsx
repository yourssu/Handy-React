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
      <div>{children}</div>
    </TabContext.Provider>
  );
};

const List = ({ children, size = 'large', ...props }: TabListProps) => {
  const validChildren = Children.toArray(children);
  if (validChildren.length === 0)
    throw new Error('List 컴포넌트 안에 Tab 컴포넌트를 1개 이상 넣어주세요');

  const { scrollable } = useContext(TabContext) ?? { scrollable: true };
  return (
    <StyledList role="tablist" $scrollable={scrollable} $size={size} {...props}>
      {children}
    </StyledList>
  );
};

const Tab = ({ children, id, onClick, ...props }: TabProps) => {
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
      type="button"
      role="tab"
      aria-selected={currentTab === id}
      aria-controls={id}
      onClick={onClickWrapper}
      $isSelected={currentTab === id}
      {...props}
    >
      {children}
    </StyledTab>
  );
};

const Panel = ({ children, value, ...props }: TabPanelProps) => {
  const { currentTab } = useContext(TabContext) ?? { currentTab: undefined };

  if (currentTab !== value) return;
  return (
    <div role="tabpanel" aria-labelledby={value} {...props}>
      {children}
    </div>
  );
};

Tabs.List = List;
Tabs.Tab = Tab;
Tabs.Panel = Panel;

import React, { Children, useContext, useRef, useState } from 'react';

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
  const isSelected = currentTab === id;
  const tabRef = useRef<HTMLButtonElement>(null);

  const onClickWrapper = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setCurrentTab?.(id);
    onClick?.(event);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!tabRef.current || !tabRef.current.parentNode) return;

    // TODO: ref로 가져오는 형제 노드는 ChildNode인데 click/focus()는 HTMLElement가 가지는 메서드라 단언문을 사용함. 개선할 수 없을까 🥲
    const previousTab = tabRef.current.previousSibling as HTMLButtonElement;
    const nextTab = tabRef.current.nextSibling as HTMLButtonElement;
    const firstTab = tabRef.current.parentNode.firstChild as HTMLButtonElement;
    const lastTab = tabRef.current.parentNode.lastChild as HTMLButtonElement;

    if (event.code === 'ArrowLeft') {
      if (previousTab) {
        previousTab.click();
        previousTab.focus();
        return;
      }
      lastTab.click();
      lastTab.focus();
    }
    if (event.code === 'ArrowRight') {
      if (nextTab) {
        nextTab.click();
        nextTab.focus();
        return;
      }
      firstTab.click();
      firstTab.focus();
    }
  };

  const StyledTab = scrollable ? StyledScrollableTab : StyledFixedTab;
  return (
    <StyledTab
      type="button"
      role="tab"
      aria-selected={isSelected}
      aria-controls={id}
      tabIndex={isSelected ? 0 : -1}
      onClick={onClickWrapper}
      onKeyDown={handleKeyDown}
      $isSelected={isSelected}
      ref={tabRef}
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
    <div role="tabpanel" aria-labelledby={value} tabIndex={0} {...props}>
      {children}
    </div>
  );
};

Tabs.List = List;
Tabs.Tab = Tab;
Tabs.Panel = Panel;

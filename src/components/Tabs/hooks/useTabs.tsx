import { Children, isValidElement, useContext, useRef, useState } from 'react';

import { TabContext } from '../Tab.context';
import { StyledFixedTab, StyledList, StyledScrollableTab } from '../Tabs.style';
import { TabListProps, TabPanelProps, TabProps } from '../Tabs.type';

export const useTabs = <TabType extends string>({
  defaultTab,
  scrollable = true,
}: {
  defaultTab: TabType;
  scrollable?: boolean;
}) => {
  const Tabs = ({ children }: { children: React.ReactNode }) => {
    const [currentTab, setCurrentTab] = useState<string>(defaultTab);
    const onChange = (id: string) => setCurrentTab(id);

    return (
      <TabContext.Provider value={{ currentTab, setCurrentTab: onChange }}>
        <div>{children}</div>
      </TabContext.Provider>
    );
  };

  const List = ({ children, size = 'large', ...props }: TabListProps) => {
    const TabIdSet = new Set();

    Children.toArray(children).forEach((child) => {
      if (!isValidElement(child)) return;
      if (TabIdSet.has(child.props.id))
        throw new Error('Tabs.Tab 컴포넌트에 중복 id가 존재합니다.');
      TabIdSet.add(child.props.id);
    });

    if (TabIdSet.size === 0)
      throw new Error('Tabs.List 컴포넌트 안에 Tabs.Tab 컴포넌트를 1개 이상 넣어주세요.');

    return (
      <StyledList role="tablist" $scrollable={scrollable} $size={size} {...props}>
        {children}
      </StyledList>
    );
  };

  const Tab = ({ children, id, onClick, ...props }: TabProps<TabType>) => {
    const { currentTab, setCurrentTab } = useContext(TabContext) ?? {
      currentTab: undefined,
      setCurrentTab: undefined,
    };
    const isSelected = currentTab === id;
    const tabRef = useRef<HTMLButtonElement>(null);

    const onClickWrapper = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setCurrentTab?.(id);
      onClick?.(event);
    };

    const toHTMLElement = (node: ChildNode | null): HTMLElement | null => {
      if (!node || node.nodeType !== Node.ELEMENT_NODE) return null;
      return node as HTMLElement;
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (!tabRef.current || !tabRef.current.parentNode) return;

      const previousTab = toHTMLElement(tabRef.current.previousSibling);
      const nextTab = toHTMLElement(tabRef.current.nextSibling);
      const firstTab = toHTMLElement(tabRef.current.parentNode.firstChild);
      const lastTab = toHTMLElement(tabRef.current.parentNode.lastChild);

      if (!firstTab || !lastTab) return;

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
        className="tab"
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

  const Panel = ({ children, value, ...props }: TabPanelProps<TabType>) => {
    const { currentTab } = useContext(TabContext) ?? { currentTab: undefined };

    if (currentTab !== value) return;
    return (
      <div role="tabpanel" aria-labelledby={value} tabIndex={0} {...props}>
        {children}
      </div>
    );
  };

  return Object.assign(Tabs, { List, Tab, Panel });
};

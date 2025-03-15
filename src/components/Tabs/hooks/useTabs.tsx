import { Children, isValidElement, useRef, useState, useTransition } from 'react';

import { StyledFixedTab, StyledList, StyledScrollableTab } from '../Tabs.style';
import { TabListProps, TabPanelProps, TabProps, TabsProps } from '../Tabs.type';

export const useTabs = <TabType extends string>({
  defaultTab,
  scrollable = true,
  transition = true,
}: TabsProps<TabType>) => {
  const [isPending, startTransition] = useTransition();
  const [currentTab, setCurrentTab] = useState<TabType>(defaultTab);

  const Tabs = ({ children }: { children: React.ReactNode }) => {
    return <div>{children}</div>;
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
    const isSelected = currentTab === id;
    const tabRef = useRef<HTMLButtonElement>(null);

    const onClickWrapper = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (transition) {
        startTransition(() => setCurrentTab?.(id));
      } else {
        setCurrentTab?.(id);
      }

      onClick?.(event);
    };

    const toButtonElement = (node: ChildNode | null): HTMLButtonElement | null => {
      if (node instanceof HTMLButtonElement) return node;
      return null;
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (!tabRef.current || !tabRef.current.parentNode) return;

      const previousTab = toButtonElement(tabRef.current.previousSibling);
      const nextTab = toButtonElement(tabRef.current.nextSibling);
      const firstTab = toButtonElement(tabRef.current.parentNode.firstChild);
      const lastTab = toButtonElement(tabRef.current.parentNode.lastChild);

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
    if (currentTab !== value) return;
    return (
      <div role="tabpanel" aria-labelledby={value} tabIndex={0} {...props}>
        {children}
      </div>
    );
  };

  return [Object.assign(Tabs, { List, Tab, Panel }), isPending] as const;
};

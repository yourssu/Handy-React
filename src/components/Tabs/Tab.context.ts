import { createContext } from 'react';

interface TabContextProps {
  scrollable: boolean;
  currentTab: string | undefined;
  setCurrentTab: (id: string) => void;
}
export const TabContext = createContext<TabContextProps | undefined>(undefined);

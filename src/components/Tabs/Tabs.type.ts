export interface TabsProps<TabType extends string> {
  scrollable?: boolean;
  defaultTab: TabType;
  transition?: boolean;
}

export type TabSize = 'large' | 'small';
export interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: TabSize;
}

export interface TabProps<TabType extends string> extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  id: TabType;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface TabPanelProps<TabType extends string>
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;

  value: TabType;
}

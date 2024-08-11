export interface TabsProps {
  scrollable?: boolean;
  children: React.ReactNode;
  defaultTab: string;
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

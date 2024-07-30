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

export interface TabProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  id: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  value: string;
}

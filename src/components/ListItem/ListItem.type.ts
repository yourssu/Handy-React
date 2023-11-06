export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  isPressed?: boolean;
  width?: string | number;
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

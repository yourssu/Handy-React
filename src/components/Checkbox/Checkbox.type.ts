type CheckboxSizeType = 'small' | 'medium' | 'large';

type CheckboxProps = {
  size?: CheckboxSizeType;
  selected?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLInputElement>;

export type { CheckboxProps, CheckboxSizeType };

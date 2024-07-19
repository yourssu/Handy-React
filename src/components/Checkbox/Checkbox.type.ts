type CheckboxSizeType = 'small' | 'medium' | 'large';

type CheckboxProps = {
  size?: CheckboxSizeType;
  selected?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
};

export type { CheckboxProps, CheckboxSizeType };

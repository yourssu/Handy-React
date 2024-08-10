export type RadioGroupOrientationType = 'horizontal' | 'vertical';
export type RadioGroupSizeType = 'small' | 'medium' | 'large';

export interface RadioGroupValueChangeEvent<Values extends string> {
  value: Values;
  event: React.ChangeEvent<HTMLFieldSetElement>;
}

export interface RadioGroupProps<Values extends string> {
  size: RadioGroupSizeType;
  children: React.ReactNode;
  orientation?: RadioGroupOrientationType;
  onValueChange?: (e: RadioGroupValueChangeEvent<Values>) => void;
}

export interface RadioGroupItemProps<Values extends string> {
  value: Values;
  children: React.ReactNode;
  disabled?: boolean;
}

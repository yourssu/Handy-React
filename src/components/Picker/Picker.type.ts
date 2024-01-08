import React from 'react';

export interface PickerProps extends React.ComponentPropsWithRef<'div'> {}

export type PickerColumnOption = {
  value: string;
  label: string;
};
export type PickerColumnProps = {
  options: PickerColumnOption[];
  value: string;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'>;

import React from 'react';

export type FabHierarchy = 'primary' | 'secondary';
export type FabSize = 'large' | 'small';

export interface FabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: FabSize;
  hierarchy: FabHierarchy;
  children: React.ReactNode;
}

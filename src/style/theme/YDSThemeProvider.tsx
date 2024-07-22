import { ThemeProvider } from 'styled-components';

import {
  primitiveColorPalette,
  primitiveNumber,
  semanticColorPalette,
  semanticRadius,
  typo,
} from '../foundation';

import { YDSTheme } from './theme.type';

export interface YDSThemeProviderProps {
  children?: React.ReactNode;
}

export const YDSThemeProvider = ({ children }: YDSThemeProviderProps) => {
  const theme: YDSTheme = {
    primitive: {
      color: primitiveColorPalette,
      number: primitiveNumber,
    },
    semantic: {
      color: semanticColorPalette,
      radius: semanticRadius,
    },
    typo,
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

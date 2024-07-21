import { ThemeProvider } from 'styled-components';

import {
  primitiveColorPalette,
  primitiveSpacing,
  semanticColorPalette,
  semanticSpacing,
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
      spacing: primitiveSpacing,
    },
    semantic: {
      color: semanticColorPalette,
      spacing: semanticSpacing,
    },
    typo,
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

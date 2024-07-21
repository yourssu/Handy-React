import { ThemeProvider } from 'styled-components';

import { primitiveColorPalette, spacing, typo } from '../foundation';

import { YDSTheme } from './theme.type';

export interface YDSThemeProviderProps {
  children?: React.ReactNode;
}

export const YDSThemeProvider = ({ children }: YDSThemeProviderProps) => {
  const theme: YDSTheme = {
    primitive: {
      color: primitiveColorPalette,
      spacing,
    },
    // semantic: {},
    typo,
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

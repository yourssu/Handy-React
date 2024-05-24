import { useMemo } from 'react';

import { ThemeProvider } from 'styled-components';

import { useColorTheme } from '@/hooks';

import { baseColorPalettes, semanticColorPalettes, typos } from '../foundation';

import { YDSTheme } from './theme.type';

export interface YDSThemeProviderProps {
  children?: React.ReactNode;
}
export const YDSThemeProvider = ({ children }: YDSThemeProviderProps) => {
  const { currentColorTheme } = useColorTheme();

  const theme: YDSTheme = useMemo(() => {
    const _theme: YDSTheme = {
      color: semanticColorPalettes.light,
      baseColor: baseColorPalettes.light,
      typo: typos,
    };

    if (currentColorTheme === 'light') {
      _theme.color = semanticColorPalettes.light;
      _theme.baseColor = baseColorPalettes.light;
    } else {
      _theme.color = semanticColorPalettes.dark;
      _theme.baseColor = baseColorPalettes.dark;
    }

    return _theme;
  }, [currentColorTheme]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

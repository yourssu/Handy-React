import {
  ColorThemeContextProvider,
  ColorThemeContextProviderProps,
} from '@/hooks/useColorTheme/ColorTheme.context';
import { YDSThemeProvider } from '@/style/theme';

export type YDSProviderProps = {
  children?: React.ReactNode;
} & ColorThemeContextProviderProps;

/**
 * YDS에 사용되는 Context Provider를 위한 컴포넌트입니다.
 * 일반적으로 YDSWrapper 컴포넌트를 사용하시면 됩니다.
 * @param param0
 * @returns
 */
export function YDSProvider({ children, fixedColorTheme }: YDSProviderProps) {
  return (
    <ColorThemeContextProvider fixedColorTheme={fixedColorTheme}>
      <YDSThemeProvider>{children}</YDSThemeProvider>
    </ColorThemeContextProvider>
  );
}

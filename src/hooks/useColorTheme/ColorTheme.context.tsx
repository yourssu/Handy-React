import { createContext, useCallback, useEffect, useMemo, useState } from 'react';

export type SelectedColorTheme = 'light' | 'dark' | 'system';
export type CurrentTheme = 'light' | 'dark';

export interface ColorThemeContextProps {
  /**
   * 현재 선택된 테마 모드를 반환합니다.
   * @default "system"
   * @returns "light" | "dark" | "system"
   */
  selectedColorTheme: SelectedColorTheme;

  /**
   * 현재 적용된 테마를 반환합니다.
   * @returns "light" | "dark"
   */
  currentColorTheme: CurrentTheme;

  /**
   * 테마를 지정합니다.
   */
  setTheme: (theme: SelectedColorTheme) => void;
}

export const ColorThemeContext = createContext<ColorThemeContextProps>({
  selectedColorTheme: 'system',
  currentColorTheme: 'light',
  setTheme: () => {},
});

export interface ColorThemeContextProviderProps {
  children?: React.ReactNode;

  /**
   * 특정 theme로 고정합니다.
   */
  fixedColorTheme?: CurrentTheme;
}

export function ColorThemeContextProvider({
  children,
  fixedColorTheme: fixedTheme,
}: ColorThemeContextProviderProps) {
  const [SelectedTheme, setSelectedTheme] = useState<SelectedColorTheme>('system');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      if (!['light', 'dark', 'system'].includes(savedTheme)) {
        localStorage.removeItem('theme');
        return;
      }
      setSelectedTheme(savedTheme as SelectedColorTheme);
    }
  }, []);

  const currentTheme = useMemo((): CurrentTheme => {
    if (fixedTheme) {
      return fixedTheme;
    }

    if (SelectedTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      return systemTheme;
    }

    return SelectedTheme;
  }, [fixedTheme, SelectedTheme]);

  const changeTheme = useCallback((theme: SelectedColorTheme) => {
    setSelectedTheme(theme);
    localStorage.setItem('theme', theme);
  }, []);

  return (
    <ColorThemeContext.Provider
      value={{
        currentColorTheme: currentTheme,
        selectedColorTheme: SelectedTheme,
        setTheme: changeTheme,
      }}
    >
      {children}
    </ColorThemeContext.Provider>
  );
}

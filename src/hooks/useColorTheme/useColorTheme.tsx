import { useContext } from "react";
import { ColorThemeContext } from "./ColorTheme.context";

/**
 * YDS 프로젝트의 컬러 모드 (라이트, 다크)을 확인하거나 변경합니다.
 * @returns
 */
export function useColorTheme() {
    return useContext(ColorThemeContext);
}

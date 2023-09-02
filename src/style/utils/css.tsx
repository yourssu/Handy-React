const convertToCssVarName = (text: string) =>
    `--${text.replace(/[A-Z]/g, (match) => "-" + match.toLowerCase())}`;

export const cssVar = (name: string) => `var(${convertToCssVarName(name)})`;

/**
 * 입력받은 vars를 css에서 사용할 수 있는 값으로 변환합니다.
 * @example
 * const vars = { red: "#FF0000", blue: "#0000FF" };
 * const cssVarDefinition = buildCssVarDefinition(vars);
 * console.log(cssVarDefinition);
 * // "--red: #FF0000
 * // --blue: #0000FF";
 *  */
export const buildCssVarDefinition = (vars: Record<string, string>) => {
    return Object.keys(vars).reduce((acc, key) => {
        acc += `${convertToCssVarName(key)}: ${vars[key]};\n`;
        return acc;
    }, "");
};

/**
 * 입력받은 vars를 css에서 사용할 수 있는 값으로 변환합니다.
 * @example
 * const vars = { red: "#FF0000", blue: "#0000FF" };
 * const cssVar = buildCssVar(vars);
 * console.log(cssVar); // { red: var(--red), blue: var(--blue) }
 */
export const buildCssVar = <T extends string>(vars: Record<T, string>) => {
    return (Object.keys(vars) as T[]).reduce((acc, key) => {
        acc[key] = cssVar(key);
        return acc;
    }, {} as Record<T, string>);
};

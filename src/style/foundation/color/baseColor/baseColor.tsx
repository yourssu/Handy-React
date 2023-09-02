import { buildCssVar, buildCssVarDefinition } from "../../../utils/css";
import { Theme } from "../color.type";
import { baseColorPalettes } from "./baseColorPalette";

export const baseColorDefinition: Record<Theme, string> = {
    light: buildCssVarDefinition(baseColorPalettes.light),
    dark: buildCssVarDefinition(baseColorPalettes.dark),
};

export const baseColorVars = buildCssVar(baseColorPalettes.light);

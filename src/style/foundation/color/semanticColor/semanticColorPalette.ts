import { primitiveColorPalettes } from '../primitiveColor';

import { SemanticColor } from './semanticColor.type';

export type SemanticColorPalette = Readonly<Record<SemanticColor, string>>;

// TODO: semantic token 작업 브랜치(#124)와 병합
export const semanticColorPalette: SemanticColorPalette = {
  // Semantic Button Color
  buttonBoxPrimaryEnabled: primitiveColorPalettes.violet500,
  buttonBoxPrimaryPressed: primitiveColorPalettes.violet700,
  buttonBoxPrimaryDisabled: primitiveColorPalettes.gray100,

  buttonBoxSecondaryEnabled: primitiveColorPalettes.violet050,
  buttonBoxSecondaryPressed: primitiveColorPalettes.violet200,
  buttonBoxSecondaryDisabled: primitiveColorPalettes.gray100,

  buttonBoxTertiaryEnabled: primitiveColorPalettes.neutralTransparent,
  buttonBoxTertiaryPressed: primitiveColorPalettes.gray100,
  buttonBoxTertiaryDisabled: primitiveColorPalettes.neutralTransparent,

  buttonTextPrimaryEnabled: primitiveColorPalettes.neutralTransparent,
  buttonTextPrimaryPressed: primitiveColorPalettes.violet050,
  buttonTextPrimaryDisabled: primitiveColorPalettes.neutralTransparent,

  buttonTextSecondaryEnabled: primitiveColorPalettes.neutralTransparent,
  buttonTextSecondaryPressed: primitiveColorPalettes.gray100,
  buttonTextSecondaryDisabled: primitiveColorPalettes.neutralTransparent,
} as const;

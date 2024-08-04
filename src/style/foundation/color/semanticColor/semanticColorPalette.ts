import { primitiveColorPalette } from '@/style/foundation/color/primitiveColor';
import { SemanticColorPalette } from '@/style/foundation/color/semanticColor/semanticColor.type';

export const semanticColorPalette: SemanticColorPalette = {
  bgBasicDefault: primitiveColorPalette.neutralWhite,
  bgBasicLight: primitiveColorPalette.gray050,
  bgBasicStrong: primitiveColorPalette.gray100,
  bgBasicBlack: primitiveColorPalette.neutralBlack,

  bgBrandPrimary: primitiveColorPalette.violet500,
  bgBrandSecondary: primitiveColorPalette.violet050,

  bgStatusNegative: primitiveColorPalette.statusRedMain,
  bgStatusPositive: primitiveColorPalette.violet500,

  textBasicPrimary: primitiveColorPalette.neutralBlack,
  textBasicSecondary: primitiveColorPalette.gray700,
  textBasicTertiary: primitiveColorPalette.gray500,
  textBasicDisabled: primitiveColorPalette.gray300,
  textBasicWhite: primitiveColorPalette.neutralWhite,

  textBrandPrimary: primitiveColorPalette.violet500,
  textBrandSecondary: primitiveColorPalette.violet600,

  textStatusNegative: primitiveColorPalette.statusRedMain,
  textStatusPositive: primitiveColorPalette.violet500,

  lineBasicLight: primitiveColorPalette.gray100,
  lineBasicMedium: primitiveColorPalette.gray200,
  lineBasicStrong: primitiveColorPalette.gray300,

  lineStatusNegative: primitiveColorPalette.statusRedMain,
  lineStatusPositive: primitiveColorPalette.violet500,

  buttonBoxPrimaryEnabled: primitiveColorPalette.violet500,
  buttonBoxPrimaryPressed: primitiveColorPalette.violet700,
  buttonBoxPrimaryDisabled: primitiveColorPalette.gray100,

  buttonBoxSecondaryEnabled: primitiveColorPalette.violet050,
  buttonBoxSecondaryPressed: primitiveColorPalette.violet200,
  buttonBoxSecondaryDisabled: primitiveColorPalette.gray100,

  buttonBoxTertiaryEnabled: primitiveColorPalette.neutralTransparent,
  buttonBoxTertiaryPressed: primitiveColorPalette.gray100,
  buttonBoxTertiaryDisabled: primitiveColorPalette.neutralTransparent,

  buttonTextPrimaryEnabled: primitiveColorPalette.neutralTransparent,
  buttonTextPrimaryPressed: primitiveColorPalette.violet050,
  buttonTextPrimaryDisabled: primitiveColorPalette.neutralTransparent,

  buttonFabPrimaryEnabled: primitiveColorPalette.violet500,
  buttonFabPrimaryPressed: primitiveColorPalette.violet700,
  buttonFabPrimaryDisabled: primitiveColorPalette.gray100,

  buttonRadioSelected: primitiveColorPalette.violet500,
  buttonRadioUnselected: primitiveColorPalette.gray200,
  buttonRadioDisabled: primitiveColorPalette.neutralWhite,

  buttonTextSecondaryEnabled: primitiveColorPalette.neutralTransparent,
  buttonTextSecondaryPressed: primitiveColorPalette.gray100,
  buttonTextSecondaryDisabled: primitiveColorPalette.neutralTransparent,

  buttonFabSecondaryEnabled: primitiveColorPalette.neutralWhite,
  buttonFabSecondaryPressed: primitiveColorPalette.gray100,
  buttonFabSecondaryDisabled: primitiveColorPalette.neutralWhite,

  iconBasicPrimary: primitiveColorPalette.neutralBlack,
  iconBasicSecondary: primitiveColorPalette.gray700,
  iconBasicTertiary: primitiveColorPalette.gray500,
  iconBasicDisabled: primitiveColorPalette.gray200,
  iconBasicWhite: primitiveColorPalette.neutralWhite,

  iconBrandPrimary: primitiveColorPalette.violet500,
  iconBrandSecondary: primitiveColorPalette.violet600,

  checkboxSelected: primitiveColorPalette.violet500,
  checkboxUnselected: primitiveColorPalette.neutralWhite,
  checkboxDisabled: primitiveColorPalette.gray200,

  chipSelected: primitiveColorPalette.violet100,
  chipUnselected: primitiveColorPalette.gray100,
  chipDisabled: primitiveColorPalette.gray050,

  paginationBrandPressed: primitiveColorPalette.violet050,

  paginationBasicSelected: primitiveColorPalette.neutralBlack,
  paginationBasicUnselected: primitiveColorPalette.gray200,
} as const;

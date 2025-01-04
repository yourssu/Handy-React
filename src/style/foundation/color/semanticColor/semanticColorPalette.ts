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

  lineBrandPrimary: primitiveColorPalette.violet500,

  lineStatusNegative: primitiveColorPalette.statusRedMain,
  lineStatusPositive: primitiveColorPalette.violet500,

  buttonFilledPrimaryEnabled: primitiveColorPalette.violet500,
  buttonFilledPrimaryPressed: primitiveColorPalette.violet700,
  buttonFilledPrimaryDisabled: primitiveColorPalette.gray100,

  buttonFilledSecondaryEnabled: primitiveColorPalette.violet050,
  buttonFilledSecondaryPressed: primitiveColorPalette.violet200,
  buttonFilledSecondaryDisabled: primitiveColorPalette.gray100,

  buttonOutlinedEnabled: primitiveColorPalette.neutralTransparent,
  buttonOutlinedPressed: primitiveColorPalette.gray100,
  buttonOutlinedDisabled: primitiveColorPalette.neutralTransparent,

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
  iconBasicDisabledStrong: primitiveColorPalette.gray300,
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

  switchSelected: primitiveColorPalette.violet500,
  switchUnselected: primitiveColorPalette.gray300,
  switchDisabled: primitiveColorPalette.gray200,
  switchThumb: primitiveColorPalette.neutralWhite,

  snackbarInfo: primitiveColorPalette.gray800,
  snackbarError: primitiveColorPalette.statusRedSub,
} as const;

import { baseColorPalettes } from '../baseColor';
import { Theme } from '../color.type';

import { SemanticColor } from './semanticColor.type';

export type SemanticColorPalette = Readonly<Record<SemanticColor, string>>;

const lightSemanticColorPalette: SemanticColorPalette = {
  // Semantic Background Color
  bgNormal: baseColorPalettes.light.white000,
  bgElevated: baseColorPalettes.light.white000,
  bgRecomment: baseColorPalettes.light.gray050,
  bgSelected: baseColorPalettes.light.gray900A05,
  bgPressed: baseColorPalettes.light.gray900A05,
  bgDimDark: baseColorPalettes.light.gray900A30,
  bgNormalDark: baseColorPalettes.light.realBlack,
  bgElevatedDark: baseColorPalettes.light.realBlack,

  // Semantic Text Color
  textPrimary: baseColorPalettes.light.black000,
  textSecondary: baseColorPalettes.light.gray900,
  textTertiary: baseColorPalettes.light.gray600,
  textDisabled: baseColorPalettes.light.gray500,
  textBright: baseColorPalettes.light.white000,
  textPointed: baseColorPalettes.light.pointColor400,
  textWarned: baseColorPalettes.light.warningRed400,

  // Semantic Dim Color
  dimNormal: baseColorPalettes.light.gray900A30,
  dimThick: baseColorPalettes.light.gray900A70,
  dimThickBright: baseColorPalettes.light.white000A70,

  // Semantic Border Color
  borderThin: baseColorPalettes.light.gray100,
  borderNormal: baseColorPalettes.light.black000A10,
  borderThick: baseColorPalettes.light.gray500,

  // Semantic Button Color
  buttonNormal: baseColorPalettes.light.gray700,
  buttonNormalPressed: baseColorPalettes.light.gray600,
  buttonBG: baseColorPalettes.light.gray200,
  buttonEmojiBG: baseColorPalettes.light.gray100,
  buttonDisabled: baseColorPalettes.light.gray500,
  buttonDisabledBG: baseColorPalettes.light.gray200,
  buttonBright: baseColorPalettes.light.white000,
  buttonPoint: baseColorPalettes.light.pointColor400,
  buttonPointPressed: baseColorPalettes.light.pointColor300,
  buttonPointBG: baseColorPalettes.light.pointColor050,
  buttonWarned: baseColorPalettes.light.warningRed400,
  buttonWarnedPressed: baseColorPalettes.light.warningRed300,
  buttonWarnedBG: baseColorPalettes.light.warningRed050,

  // Semantic Bottom Bar Color
  bottomBarNormal: baseColorPalettes.light.gray600,
  bottomBarSelected: baseColorPalettes.light.gray800,

  // Semantic Input Field Color
  inputFieldNormal: baseColorPalettes.light.white000,
  inputFieldElevated: baseColorPalettes.light.gray100,

  // Semantic Toast Color
  toastBG: baseColorPalettes.light.gray800,

  // Semantic Pressed Color
  pressed: baseColorPalettes.light.gray900A05,

  // Semantic ToolTip Color
  tooltipBG: baseColorPalettes.light.gray700,
  tooltipPoint: baseColorPalettes.light.pointColor400,

  // Semantic Picker Color
  dimPickerReverse: baseColorPalettes.light.white000A70,

  // Semantic Shadow Color
  shadowThin: baseColorPalettes.light.gray400,
  shadowNormal: baseColorPalettes.light.gray500,

  // Semantic Logo Color
  pointIndigo: baseColorPalettes.light.logoIndigo,
  pointViolet: baseColorPalettes.light.logoViolet,
  pointYellow: baseColorPalettes.light.logoYellow,

  // Semantic MonoItem Color
  monoItemPrimary: baseColorPalettes.light.gray700,
  monoItemBG: baseColorPalettes.light.gray100,
  monoItemText: baseColorPalettes.light.gray800,

  // Semantic LimeItem Color
  limeItemPrimary: baseColorPalettes.light.lime300,
  limeItemBG: baseColorPalettes.light.lime050,
  limeItemText: '', // TODO: #1 추후 색상 추가시 수정

  // Semantic GreenItem Color
  greenItemPrimary: baseColorPalettes.light.green300,
  greenItemBG: baseColorPalettes.light.green050,
  greenItemText: baseColorPalettes.light.green800,

  // Semantic EmeraldItem Color
  emeraldItemPrimary: baseColorPalettes.light.emerald300,
  emeraldItemBG: baseColorPalettes.light.emerald050,
  emeraldItemText: baseColorPalettes.light.emerald800,

  // Semantic AquaItem Color
  aquaItemPrimary: baseColorPalettes.light.aqua300,
  aquaItemBG: baseColorPalettes.light.aqua050,
  aquaItemText: baseColorPalettes.light.aqua700,

  // Semantic BlueItem Color
  blueItemPrimary: baseColorPalettes.light.blue300,
  blueItemBG: baseColorPalettes.light.blue050,
  blueItemText: baseColorPalettes.light.blue700,

  // Semantic IndigoItem Color
  indigoItemPrimary: baseColorPalettes.light.indigo300,
  indigoItemBG: baseColorPalettes.light.indigo050,
  indigoItemText: baseColorPalettes.light.indigo400,

  // Semantic VioletItem Color
  violetItemPrimary: baseColorPalettes.light.violet300,
  violetItemBG: baseColorPalettes.light.violet050,
  violetItemText: baseColorPalettes.light.violet400,

  // Semantic PurpleItem Color
  purpleItemPrimary: baseColorPalettes.light.purple300,
  purpleItemBG: baseColorPalettes.light.purple050,
  purpleItemText: baseColorPalettes.light.purple400,

  // Semantic PinkItem Color
  pinkItemPrimary: baseColorPalettes.light.pink300,
  pinkItemBG: baseColorPalettes.light.pink050,
  pinkItemText: baseColorPalettes.light.pink600,
};

const darkSemanticColorPalette: SemanticColorPalette = {
  // Semantic Background Color
  bgNormal: baseColorPalettes.dark.black000,
  bgElevated: baseColorPalettes.dark.black000,
  bgRecomment: baseColorPalettes.dark.realBlack,
  bgPressed: baseColorPalettes.dark.white000A05,
  bgSelected: baseColorPalettes.dark.white000A05,
  bgNormalDark: baseColorPalettes.dark.realBlack,
  bgElevatedDark: baseColorPalettes.dark.realBlack,
  bgDimDark: baseColorPalettes.dark.black000A30,

  // Semantic Text Color
  textPrimary: baseColorPalettes.dark.gray900,
  textSecondary: baseColorPalettes.dark.gray800,
  textTertiary: baseColorPalettes.dark.gray600,
  textDisabled: baseColorPalettes.dark.gray400,
  textBright: baseColorPalettes.dark.white000,
  textPointed: baseColorPalettes.dark.pointColor400,
  textWarned: baseColorPalettes.dark.warningRed400,

  // Semantic Dim Color
  dimNormal: baseColorPalettes.dark.black000A30,
  dimThick: baseColorPalettes.dark.black000A70,
  dimThickBright: baseColorPalettes.dark.white000A70,

  // Semantic Border Color
  borderThin: baseColorPalettes.dark.gray100,
  borderNormal: baseColorPalettes.dark.white000A10,
  borderThick: baseColorPalettes.dark.gray500,

  // Semantic Button Color
  buttonNormal: baseColorPalettes.dark.gray700,
  buttonNormalPressed: baseColorPalettes.dark.gray600,
  buttonBG: baseColorPalettes.dark.gray200,
  buttonEmojiBG: baseColorPalettes.dark.gray100,
  buttonDisabled: baseColorPalettes.dark.gray500,
  buttonDisabledBG: baseColorPalettes.dark.gray200,
  buttonBright: baseColorPalettes.dark.white000,
  buttonPoint: baseColorPalettes.dark.pointColor400,
  buttonPointPressed: baseColorPalettes.dark.pointColor300,
  buttonPointBG: baseColorPalettes.dark.pointColor050,
  buttonWarned: baseColorPalettes.dark.warningRed400,
  buttonWarnedPressed: baseColorPalettes.dark.warningRed300,
  buttonWarnedBG: baseColorPalettes.dark.warningRed050,

  // Semantic Bottom Bar Color
  bottomBarNormal: baseColorPalettes.dark.gray600,
  bottomBarSelected: baseColorPalettes.dark.gray800,

  // Semantic Input Field Color
  inputFieldNormal: baseColorPalettes.dark.black000,
  inputFieldElevated: baseColorPalettes.dark.gray100,

  // Semantic Toast Color
  toastBG: baseColorPalettes.dark.gray300,

  // Semantic ToolTip Color
  tooltipBG: baseColorPalettes.dark.gray400,
  tooltipPoint: baseColorPalettes.dark.pointColor400,

  // Semantic Picker Color
  dimPickerReverse: baseColorPalettes.dark.white000A70,

  // Semantic Shadow Color
  shadowThin: 'rgba(0, 0, 0, 0)',
  shadowNormal: 'rgba(0, 0, 0, 0)',

  // Semantic Pressed Color
  pressed: baseColorPalettes.dark.white000A10,

  // Semantic Logo Color
  pointIndigo: baseColorPalettes.dark.logoIndigo,
  pointViolet: baseColorPalettes.dark.logoViolet,
  pointYellow: baseColorPalettes.dark.logoYellow,

  // Semantic MonoItem Color
  monoItemPrimary: baseColorPalettes.dark.gray700,
  monoItemBG: baseColorPalettes.dark.gray100,
  monoItemText: baseColorPalettes.dark.gray800,

  // Semantic LimeItem Color
  limeItemPrimary: baseColorPalettes.dark.lime300,
  limeItemBG: baseColorPalettes.dark.lime050,
  limeItemText: '', // TODO: #1 추후 색상 추가시 수정

  // Semantic GreenItem Color
  greenItemPrimary: baseColorPalettes.dark.green300,
  greenItemBG: baseColorPalettes.dark.green050,
  greenItemText: baseColorPalettes.dark.green800,

  // Semantic EmeraldItem Color
  emeraldItemPrimary: baseColorPalettes.dark.emerald300,
  emeraldItemBG: baseColorPalettes.dark.emerald050,
  emeraldItemText: baseColorPalettes.dark.emerald800,

  // Semantic AquaItem Color
  aquaItemPrimary: baseColorPalettes.dark.aqua300,
  aquaItemBG: baseColorPalettes.dark.aqua050,
  aquaItemText: baseColorPalettes.dark.aqua700,

  // Semantic BlueItem Color
  blueItemPrimary: baseColorPalettes.dark.blue300,
  blueItemBG: baseColorPalettes.dark.blue050,
  blueItemText: baseColorPalettes.dark.blue700,

  // Semantic IndigoItem Color
  indigoItemPrimary: baseColorPalettes.dark.indigo300,
  indigoItemBG: baseColorPalettes.dark.indigo050,
  indigoItemText: baseColorPalettes.dark.indigo400,

  // Semantic VioletItem Color
  violetItemPrimary: baseColorPalettes.dark.violet300,
  violetItemBG: baseColorPalettes.dark.violet050,
  violetItemText: baseColorPalettes.dark.violet400,

  // Semantic PurpleItem Color
  purpleItemPrimary: baseColorPalettes.dark.purple300,
  purpleItemBG: baseColorPalettes.dark.purple050,
  purpleItemText: baseColorPalettes.dark.purple400,

  // Semantic PinkItem Color
  pinkItemPrimary: baseColorPalettes.dark.pink300,
  pinkItemBG: baseColorPalettes.dark.pink050,
  pinkItemText: baseColorPalettes.dark.pink600,
};

export const semanticColorPalettes: Record<Theme, SemanticColorPalette> = {
  light: lightSemanticColorPalette,
  dark: darkSemanticColorPalette,
} as const;

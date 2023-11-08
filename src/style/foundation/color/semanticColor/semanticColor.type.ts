// https://www.figma.com/file/yVXvVvBKZnG9BBsvdC3J5B/%5B0.-Common%5D-Yourssu-Design-System?type=design&node-id=1%3A461&mode=design&t=KtrwDpGrj62wFgzG-1

export type SemanticBackgroundColor =
  | 'bgNormal'
  | 'bgElevated'
  | 'bgRecomment'
  | 'bgPressed'
  | 'bgSelected'
  | 'bgNormalDark'
  | 'bgElevatedDark'
  | 'bgDimDark';

export type SemanticTextColor =
  | 'textPrimary'
  | 'textSecondary'
  | 'textTertiary'
  | 'textDisabled'
  | 'textBright'
  | 'textPointed'
  | 'textWarned';

export type SemanticDimColor = 'dimNormal' | 'dimThick' | 'dimThickReserved';

export type SemanticBorderColor = 'borderThin' | 'borderNormal' | 'borderThick';

export type SemanticButtonColor =
  | 'buttonNormal'
  | 'buttonNormalPressed'
  | 'buttonBG'
  | 'buttonEmojiBG'
  | 'buttonBright'
  | 'buttonDisabled'
  | 'buttonDisabledBG'
  | 'buttonPoint'
  | 'buttonPointPressed'
  | 'buttonPointBG'
  | 'buttonWarned'
  | 'buttonWarnedPressed'
  | 'buttonWarnedBG';

export type SemanticBottomBarColor = 'bottomBarNormal' | 'bottomBarSelected';

export type SemanticInputFieldColor = 'inputFieldNormal' | 'inputFieldElevated';

export type SemanticToastColor = 'toastBG';

export type SemanticPressedColor = 'pressed';

export type SemanticToolTipColor = 'tooltipBG' | 'tooltipPoint';

export type SemanticPickerColor = 'dimPickerReverse';

export type SemanticShadowColor = 'shadowThin' | 'shadowNormal';

type SemanticItemColorVariants<ColorName extends string> =
  | `${ColorName}Primary`
  | `${ColorName}BG`
  | `${ColorName}Text`;

export type SemanticMonoItemColor = SemanticItemColorVariants<'monoItem'>;
export type SemanticLimeItemColor = SemanticItemColorVariants<'limeItem'>;
export type SemanticGreenItemColor = SemanticItemColorVariants<'greenItem'>;
export type SemanticEmeraldItemColor = SemanticItemColorVariants<'emeraldItem'>;
export type SemanticAquaItemColor = SemanticItemColorVariants<'aquaItem'>;
export type SemanticBlueItemColor = SemanticItemColorVariants<'blueItem'>;
export type SemanticIndigoItemColor = SemanticItemColorVariants<'indigoItem'>;
export type SemanticVioletItemColor = SemanticItemColorVariants<'violetItem'>;
export type SemanticPurpleItemColor = SemanticItemColorVariants<'purpleItem'>;
export type SemanticPinkItemColor = SemanticItemColorVariants<'pinkItem'>;

export type SemanticItemColor =
  | SemanticMonoItemColor
  | SemanticLimeItemColor
  | SemanticGreenItemColor
  | SemanticEmeraldItemColor
  | SemanticAquaItemColor
  | SemanticBlueItemColor
  | SemanticIndigoItemColor
  | SemanticVioletItemColor
  | SemanticPurpleItemColor
  | SemanticPinkItemColor;

export type SemanticColor =
  | SemanticBackgroundColor
  | SemanticTextColor
  | SemanticDimColor
  | SemanticBorderColor
  | SemanticButtonColor
  | SemanticBottomBarColor
  | SemanticInputFieldColor
  | SemanticToastColor
  | SemanticPressedColor
  | SemanticToolTipColor
  | SemanticPickerColor
  | SemanticShadowColor
  | SemanticItemColor;

// Utility Types
type OnlyBGColor<T> = T extends `${string}BG` ? T : never;
export type SemanticBGColor = OnlyBGColor<SemanticColor>;

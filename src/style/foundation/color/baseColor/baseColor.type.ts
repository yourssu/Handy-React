// https://www.figma.com/file/yVXvVvBKZnG9BBsvdC3J5B/%5B0.-Common%5D-Yourssu-Design-System?type=design&node-id=0%3A1&mode=design&t=KtrwDpGrj62wFgzG-1

export type BaseLogoColor = 'logoIndigo' | 'logoViolet' | 'logoYellow';

export type BasePointColor =
  | 'pointColor050'
  | 'pointColor100'
  | 'pointColor200'
  | 'pointColor300'
  | 'pointColor400'
  | 'pointColor500'
  | 'pointColor600'
  | 'pointColor700'
  | 'pointColor800'
  | 'pointColor900';

export type BaseWarningRedColor =
  | 'warningRed050'
  | 'warningRed100'
  | 'warningRed200'
  | 'warningRed300'
  | 'warningRed400'
  | 'warningRed500'
  | 'warningRed600'
  | 'warningRed700'
  | 'warningRed800'
  | 'warningRed900';

export type BaseWhiteAndBlackColor = 'white000' | 'black000' | 'realBlack';

export type BaseGrayColor =
  | 'gray050'
  | 'gray100'
  | 'gray200'
  | 'gray300'
  | 'gray400'
  | 'gray500'
  | 'gray600'
  | 'gray700'
  | 'gray800'
  | 'gray900';

export type BaseWBAlphaColor =
  | 'white000A05'
  | 'white000A10'
  | 'white000A30'
  | 'white000A70'
  | 'gray900A30'
  | 'gray900A70'
  | 'black000A05'
  | 'black000A10'
  | 'black000A30'
  | 'black000A70';

type BaseVariousColor<ColorName extends string> =
  | `${ColorName}050`
  | `${ColorName}100`
  | `${ColorName}200`
  | `${ColorName}300`
  | `${ColorName}400`
  | `${ColorName}500`
  | `${ColorName}600`
  | `${ColorName}700`
  | `${ColorName}800`;

export type BasePinkColor = BaseVariousColor<'pink'>;
export type BaseRedColor = BaseVariousColor<'red'>;
export type BaseOrangeColor = BaseVariousColor<'orange'>;
export type BaseYellowColor = BaseVariousColor<'yellow'>;
export type BaseLimeColor = BaseVariousColor<'lime'>;
export type BaseGreenColor = BaseVariousColor<'green'>;
export type BaseEmeraldColor = BaseVariousColor<'emerald'>;
export type BaseAquaColor = BaseVariousColor<'aqua'>;
export type BaseBlueColor = BaseVariousColor<'blue'>;
export type BaseIndigoColor = BaseVariousColor<'indigo'>;
export type BaseVioletColor = BaseVariousColor<'violet'>;
export type BasePurpleColor = BaseVariousColor<'purple'>;
export type BaseBrownColor = BaseVariousColor<'brown'>;

export type BaseColor =
  | BaseLogoColor
  | BasePointColor
  | BaseWarningRedColor
  | BaseWhiteAndBlackColor
  | BaseGrayColor
  | BaseWBAlphaColor
  | BasePinkColor
  | BaseRedColor
  | BaseOrangeColor
  | BaseYellowColor
  | BaseLimeColor
  | BaseGreenColor
  | BaseEmeraldColor
  | BaseAquaColor
  | BaseBlueColor
  | BaseIndigoColor
  | BaseVioletColor
  | BasePurpleColor
  | BaseBrownColor;

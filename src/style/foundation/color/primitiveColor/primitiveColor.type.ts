// https://www.figma.com/design/gvwhMF6iNkuYKzxipKzkaG/Handy-v1-(demo)?node-id=636-131805&t=Wr7H8VzVaJXsyDQT-1

type PrimitiveVariousColor<ColorName extends string> =
  | `${ColorName}050`
  | `${ColorName}100`
  | `${ColorName}200`
  | `${ColorName}300`
  | `${ColorName}400`
  | `${ColorName}500`
  | `${ColorName}600`
  | `${ColorName}700`
  | `${ColorName}800`
  | `${ColorName}900`
  | `${ColorName}950`;

export type PrimitiveVioletColor = PrimitiveVariousColor<'violet'>;
export type PrimitiveGrayColor = PrimitiveVariousColor<'gray'>;

export type PrimitiveNeutralColor = 'neutralBlack' | 'neutralWhite' | 'neutralTransparent';

export type PrimitiveStatusColor = 'statusRedMain' | 'statusRedSub';

export type PrimitiveColor =
  | PrimitiveVioletColor
  | PrimitiveGrayColor
  | PrimitiveNeutralColor
  | PrimitiveStatusColor;

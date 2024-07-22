// https://www.figma.com/design/gvwhMF6iNkuYKzxipKzkaG/Handy-v1-(demo)?node-id=636-131805&t=Wr7H8VzVaJXsyDQT-1

import { MergeVariants } from '@/types/variant';

type PrimitiveColorSaturationVariant =
  | '050'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950';

export type PrimitiveVioletColor = MergeVariants<'violet', PrimitiveColorSaturationVariant>;
export type PrimitiveGrayColor = MergeVariants<'gray', PrimitiveColorSaturationVariant>;

export type PrimitiveNeutralColor = MergeVariants<'neutral', 'black' | 'white' | 'transparent'>;

export type PrimitiveStatusColor = MergeVariants<'status', 'red', 'main' | 'sub'>;

export type PrimitiveColorType =
  | PrimitiveVioletColor
  | PrimitiveGrayColor
  | PrimitiveNeutralColor
  | PrimitiveStatusColor;

export type PrimitiveColorPalette = Readonly<Record<PrimitiveColorType, string>>;

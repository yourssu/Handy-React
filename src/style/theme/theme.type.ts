import { PrimitiveColorPalette, Spacings, Typos } from '../foundation';

export type YDSTheme = {
  primitive: {
    color: PrimitiveColorPalette;
    spacing: Spacings;
  };

  // TOOD: semantic pr 에서 진행합니다.
  // semantic: {};
  
  typo: Typos;
};

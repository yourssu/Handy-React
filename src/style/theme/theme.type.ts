import {
  PrimitiveColorPalette,
  SemanticColorPalette,
  PrimitiveNumber,
  Typos,
  SemanticRadius,
} from '../foundation';

export type YDSTheme = {
  primitive: {
    color: PrimitiveColorPalette;
    number: PrimitiveNumber;
  };

  semantic: {
    color: SemanticColorPalette;
    radius: SemanticRadius;
  };

  typo: Typos;
};

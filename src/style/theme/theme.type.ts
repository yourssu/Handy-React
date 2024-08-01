import {
  PrimitiveColorPalette,
  PrimitiveNumber,
  SemanticColorPalette,
  SemanticEffect,
  SemanticRadius,
  Typos,
} from '../foundation';

export type YDSTheme = {
  primitive: {
    color: PrimitiveColorPalette;
    number: PrimitiveNumber;
  };

  semantic: {
    color: SemanticColorPalette;
    radius: SemanticRadius;
    effect: SemanticEffect;
  };

  typo: Typos;
};

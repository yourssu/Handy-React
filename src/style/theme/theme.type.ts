import {
  PrimitiveColorPalette,
  PrimitiveNumber,
  SemanticColorPalette,
  SemanticEffect,
  SemanticRadius,
  Typos,
  ZIndex,
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
  zIndex: ZIndex;
};

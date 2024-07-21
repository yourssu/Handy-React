import {
  PrimitiveColorPalette,
  SemanticColorPalette,
  PrimitiveSpacing,
  SemanticSpacing,
  Typos,
} from '../foundation';

export type YDSTheme = {
  primitive: {
    color: PrimitiveColorPalette;
    spacing: PrimitiveSpacing;
  };

  semantic: {
    color: SemanticColorPalette;
    spacing: SemanticSpacing;
  };

  typo: Typos;
};

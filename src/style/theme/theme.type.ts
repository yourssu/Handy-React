import { BaseColorPalette, SemanticColorPalette, Typo } from '../foundation';

export type YDSTheme = {
    color: SemanticColorPalette;
    baseColor: BaseColorPalette;
    typo: Record<Typo, string>;
};

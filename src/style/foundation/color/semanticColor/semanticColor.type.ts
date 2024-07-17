export type SemanticButtonColor<ButtonName extends string> =
  | `button${ButtonName}Enabled`
  | `button${ButtonName}Pressed`
  | `button${ButtonName}Disabled`;

export type SemanticBoxButtonColor =
  | SemanticButtonColor<'BoxPrimary'>
  | SemanticButtonColor<'BoxSecondary'>
  | SemanticButtonColor<'BoxTertiary'>;

export type SemanticTextButtonColor =
  | SemanticButtonColor<'TextPrimary'>
  | SemanticButtonColor<'TextSecondary'>;

export type SemanticColor = SemanticBoxButtonColor | SemanticTextButtonColor;

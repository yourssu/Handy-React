import { MergeVariants } from '@/types/variant';

type StaticBasicVariant = 'primary' | 'secondary' | 'tertiary' | 'disabled' | 'white';
type StaticBrandVariant = 'primary' | 'secondary';
type StatusVariant = 'negative' | 'positive';
type InteractiveVariant = 'enabled' | 'pressed' | 'disabled';
type SelectableVariant = 'selected' | 'unselected';
type SelectableVariantWithDisabled = SelectableVariant | 'disabled';

export type SemanticBackgroundBasicColor = MergeVariants<
  'bg',
  'basic',
  'default' | 'light' | 'strong' | 'black'
>;

export type SemanticBackgroundBrandColor = MergeVariants<'bg', 'brand', StaticBrandVariant>;

export type SemanticBackgroundStatusColor = MergeVariants<'bg', 'status', StatusVariant>;

export type SemanticTextBasicColor = MergeVariants<'text', 'basic', StaticBasicVariant>;

export type SemanticTextBrandColor = MergeVariants<'text', 'brand', StaticBrandVariant>;

export type SemanticTextStatusColor = MergeVariants<'text', 'status', StatusVariant>;

export type SemanticLineBasicColor = MergeVariants<'line', 'basic', 'light' | 'medium' | 'strong'>;

export type SemanticLineBrandColor = MergeVariants<'line', 'brand', 'primary'>;

export type SemanticLineStatusColor = MergeVariants<'line', 'status', StatusVariant>;

export type SemanticButtonBoxPrimaryColor = MergeVariants<
  'button',
  'box',
  'primary',
  InteractiveVariant
>;

export type SemanticButtonBoxSecondaryColor = MergeVariants<
  'button',
  'box',
  'secondary',
  InteractiveVariant
>;

export type SemanticButtonBoxTertiaryColor = MergeVariants<
  'button',
  'box',
  'tertiary',
  InteractiveVariant
>;

export type SemanticButtonFabPrimaryColor = MergeVariants<
  'button',
  'fab',
  'primary',
  InteractiveVariant
>;

export type SemanticButtonFabSecondaryColor = MergeVariants<
  'button',
  'fab',
  'secondary',
  InteractiveVariant
>;

export type SemanticButtonTextPrimaryColor = MergeVariants<
  'button',
  'text',
  'primary',
  InteractiveVariant
>;

export type SemanticButtonTextSecondaryColor = MergeVariants<
  'button',
  'text',
  'secondary',
  InteractiveVariant
>;

export type SemanticButtonRadioColor = MergeVariants<
  'button',
  'radio',
  SelectableVariantWithDisabled
>;

export type SemanticIconBasicColor = MergeVariants<
  'icon',
  'basic',
  StaticBasicVariant | 'disabledStrong'
>;

export type SemanticIconBrandColor = MergeVariants<'icon', 'brand', StaticBrandVariant>;

export type SemanticCheckboxColor = MergeVariants<'checkbox', SelectableVariantWithDisabled>;

export type SemanticChipColor = MergeVariants<'chip', SelectableVariantWithDisabled>;

export type SemanticPaginationBrandColor = MergeVariants<'pagination', 'brand', 'pressed'>;

export type SemanticPaginationBasicColor = MergeVariants<'pagination', 'basic', SelectableVariant>;

export type SemanticSwitchColor = MergeVariants<'switch', SelectableVariantWithDisabled | 'thumb'>;

export type SemanticSnackbarColor = MergeVariants<'snackbar', 'info' | 'error'>;

export type SemanticColorType =
  | SemanticBackgroundBasicColor
  | SemanticBackgroundBrandColor
  | SemanticBackgroundStatusColor
  | SemanticTextBasicColor
  | SemanticTextBrandColor
  | SemanticTextStatusColor
  | SemanticLineBasicColor
  | SemanticLineBrandColor
  | SemanticLineStatusColor
  | SemanticButtonBoxPrimaryColor
  | SemanticButtonBoxSecondaryColor
  | SemanticButtonBoxTertiaryColor
  | SemanticButtonFabPrimaryColor
  | SemanticButtonFabSecondaryColor
  | SemanticButtonTextPrimaryColor
  | SemanticButtonTextSecondaryColor
  | SemanticButtonRadioColor
  | SemanticIconBasicColor
  | SemanticIconBrandColor
  | SemanticCheckboxColor
  | SemanticChipColor
  | SemanticPaginationBrandColor
  | SemanticPaginationBasicColor
  | SemanticSwitchColor
  | SemanticSnackbarColor;

export type SemanticColorPalette = Readonly<Record<SemanticColorType, string>>;

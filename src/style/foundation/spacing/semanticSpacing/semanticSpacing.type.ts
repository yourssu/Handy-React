import { MergeVariants } from '@/types/variant';

export type SemanticSpacingRadius = MergeVariants<
  'spacing',
  'radius',
  'XS' | 's' | 'm' | 'l' | 'XL'
>;

export type SemanticSpacingType = SemanticSpacingRadius;

export type SemanticSpacing = Readonly<Record<SemanticSpacingType, number>>;

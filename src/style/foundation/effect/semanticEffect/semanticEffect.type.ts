import { MergeVariants } from '@/types/variant';

type StaticBrandVariant = 'primary' | 'secondary';

export type SemanticFabShadowEffect = MergeVariants<'fab', StaticBrandVariant, 'shadow'>;

export type SemanticEffectType = SemanticFabShadowEffect;

export type SemanticEffect = Readonly<Record<SemanticEffectType, string>>;

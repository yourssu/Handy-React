import { primitiveSpacing } from '@/style/foundation/spacing/primitiveSpacing';
import { SemanticSpacing } from '@/style/foundation/spacing/semanticSpacing/semanticSpacing.type';

const semanticSpacing: SemanticSpacing = {
  spacingRadiusXS: primitiveSpacing[8],
  spacingRadiusS: primitiveSpacing[10],
  spacingRadiusM: primitiveSpacing[12],
  spacingRadiusL: primitiveSpacing[14],
  spacingRadiusXL: primitiveSpacing[16],
} as const;

export { semanticSpacing };

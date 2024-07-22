import { primitiveNumber } from '@/style/foundation/number/primitiveNumber';
import { SemanticRadius } from '@/style/foundation/number/semanticRadius/semanticRadius.type';

const semanticRadius: SemanticRadius = {
  xs: primitiveNumber[8],
  s: primitiveNumber[10],
  m: primitiveNumber[12],
  l: primitiveNumber[14],
  xl: primitiveNumber[16],
} as const;

export { semanticRadius };

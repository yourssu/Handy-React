type PrimitiveSpacingType = '8' | '10' | '12' | '14' | '16';

type PrimitiveSpacing = Readonly<Record<PrimitiveSpacingType, number>>;

export type { PrimitiveSpacingType, PrimitiveSpacing };

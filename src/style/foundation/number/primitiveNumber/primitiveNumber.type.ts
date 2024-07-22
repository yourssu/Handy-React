type PrimitiveNumberType = '8' | '10' | '12' | '14' | '16';

type PrimitiveNumber = Readonly<Record<PrimitiveNumberType, number>>;

export type { PrimitiveNumberType, PrimitiveNumber };

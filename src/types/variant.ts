type Variantable<T> = T extends string ? Capitalize<T> : '';

type MergeVariants<
  A extends string,
  B = null,
  C = null,
  D = null,
> = `${A}${Variantable<B>}${Variantable<C>}${Variantable<D>}`;

export type { MergeVariants };

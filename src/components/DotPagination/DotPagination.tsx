import { useId, useState } from 'react';

import { StyledDotInput, StyledDotPaginationContainer } from './DotPagination.style';
import { DotPaginationProps } from './DotPagination.type';

export const DotPagination = ({
  totalPage,
  size = 'web',
  setPage,
  ...props
}: DotPaginationProps) => {
  if (totalPage <= 1) throw new Error('totalPage는 2 이상의 숫자여야 합니다.');

  const paginationId = useId();
  const pages = Array.from({ length: totalPage }, (_, i) => i + 1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleChange = (page: number) => {
    setCurrentPage(page);
    setPage?.(page);
  };

  return (
    <StyledDotPaginationContainer $size={size}>
      {pages.map((page) => (
        <StyledDotInput
          {...props}
          key={`dot-${paginationId}-${page}`}
          type="radio"
          name={`dot-${paginationId}`}
          defaultChecked={currentPage === page}
          onChange={() => handleChange(page)}
          aria-current={currentPage === page}
          $size={size}
        />
      ))}
    </StyledDotPaginationContainer>
  );
};

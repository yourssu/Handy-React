import { useState } from 'react';

import { IcArrowsChevronLeftFilled, IcArrowsChevronRightFilled } from '@/style';

import { StyledButton, StyledNav } from './Pagination.style';
import { PaginationProps } from './Pagination.type';

export const Pagination = ({ totalPage, initialPage = 1, setPage }: PaginationProps) => {
  if (totalPage <= 1) throw new Error('totalPage는 2 이상의 숫자여야 합니다.');
  if (initialPage > totalPage) throw new Error('initialPage는 totalPage보다 클 수 없습니다.');

  const [currentPage, setCurrentPage] = useState(initialPage);

  const pages = Array.from({ length: totalPage }).reduce<number[][]>(
    (section, _, index) => {
      if (index % 5 === 0) section.push([]);
      section[section.length - 1].push(index + 1);
      return section;
    },
    [[]]
  );
  const lastSection = Math.ceil(totalPage / 5);
  const currentSection = Math.ceil(currentPage / 5);
  const pagesPerSection = 5;

  const handleClickPage = (page: number) => {
    setCurrentPage(page);
    setPage?.(page);
  };

  const handleClickArrow = (direction: 'left' | 'right') => {
    const offset = direction === 'left' ? -pagesPerSection : pagesPerSection;
    handleClickPage(5 * (currentSection - 1) + 1 + offset);
  };

  return (
    <StyledNav aria-label="number-pagination">
      {totalPage > 5 && (
        <StyledButton onClick={() => handleClickArrow('left')} disabled={currentSection === 1}>
          <IcArrowsChevronLeftFilled size="16px" />
        </StyledButton>
      )}

      {pages[currentSection].map((page) => (
        <StyledButton
          aria-label="number-pagination-button"
          aria-current={currentPage === page}
          $isSelected={currentPage === page}
          type="button"
          onClick={() => handleClickPage(page)}
          key={`number-pagination-${page}`}
        >
          {page}
        </StyledButton>
      ))}

      {totalPage > 5 && (
        <StyledButton
          onClick={() => handleClickArrow('right')}
          disabled={currentSection === lastSection}
        >
          <IcArrowsChevronRightFilled size="16px" />
        </StyledButton>
      )}
    </StyledNav>
  );
};

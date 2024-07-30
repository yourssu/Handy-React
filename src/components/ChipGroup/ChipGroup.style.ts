import { styled } from 'styled-components';

export const StyledChipGroupContainer = styled.div<{ $swipable: boolean; $isSwiping: boolean }>`
  display: flex;

  flex-wrap: ${({ $swipable }) => ($swipable ? 'nowrap' : 'wrap')};
  overflow-x: ${({ $swipable }) => ($swipable ? 'auto' : 'visible')};

  row-gap: ${({ theme }) => theme.primitive.number[10]}px;
  column-gap: ${({ theme }) => theme.primitive.number[8]}px;

  cursor: ${({ $swipable, $isSwiping }) => $swipable && ($isSwiping ? 'grabbing' : 'grab')};

  /* 스크롤바 제거 */
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  /* 스와이프 중일 때, Chip 선택 금지: 허용한다면, swipe 방향이 올바르게 작동하지 않음 */
  & * {
    ${({ $isSwiping }) => $isSwiping && 'user-select: none;'}
    cursor: ${({ $swipable, $isSwiping }) => $swipable && $isSwiping && 'grabbing'};
  }
`;

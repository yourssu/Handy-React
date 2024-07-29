import { styled } from 'styled-components';

export const StyledChipGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${({ theme }) => theme.primitive.number[10]}px;
  column-gap: ${({ theme }) => theme.primitive.number[8]}px;
`;

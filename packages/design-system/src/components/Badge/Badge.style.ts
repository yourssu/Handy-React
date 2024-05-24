import { styled } from 'styled-components';

import { SemanticColor } from '@/style';

interface StyledBadgeProps {
  $backgroundColor: SemanticColor;
}
export const StyledBadge = styled.div<StyledBadgeProps>`
  display: flex;
  gap: 4px;
  align-items: center;
  width: fit-content;
  height: 24px;
  padding: 0 var(--padding);
  border-radius: 2px;
  background-color: ${({ theme, $backgroundColor }) => theme.color[$backgroundColor]};

  ${({ theme }) => theme.typo.caption1};
`;

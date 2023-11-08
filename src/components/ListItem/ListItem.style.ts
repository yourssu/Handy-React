import { styled } from 'styled-components';

import { ListItemProps } from './ListItem.type';

interface StyledListItemProps {
  $isPressed: ListItemProps['isPressed'];
  $width: ListItemProps['width'];
}

export const StyledListItem = styled.li<StyledListItemProps>`
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 8px;
  width: ${({ $width }) => $width};
  height: 100%;
  min-height: 48px;
  font-size: 15px;
  .icon {
    width: 24px;
    height: 24px;
  }
  .right-icon {
    margin-left: auto;
  }
  ${({ theme }) => theme.typo.body1}
  color: ${({ theme }) => theme.color.textSecondary};
  background-color: ${({ $isPressed, theme }) =>
    $isPressed ? theme.color.bgPressed : 'transparent'};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.bgPressed};
  }
`;

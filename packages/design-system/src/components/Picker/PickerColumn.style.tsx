import { styled } from 'styled-components';

export const StyledPickerColumnContainer = styled.div`
  width: fit-content;
  height: 224px;
  padding: 96px 0;
  display: flex;
  flex-direction: column;
  overflow: auto;
  scrollbar-width: 0px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledPickerColumnOption = styled.div`
  flex: 1;
  height: 32px;
  min-height: 32px;
  padding: 4px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
  user-select: none;
  color: ${({ theme }) => theme.color.textPrimary};
`;

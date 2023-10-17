import styled from 'styled-components';

export const StyledPicker = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 224px; // 32px * 7
  overflow: hidden;
  padding: 16px 0px;

  &::before {
    height: 96px;
    width: 100%;
    content: '';
    position: absolute;
    top: 0px;
    left: 0;
    background-color: ${({ theme }) => theme.color.dimThickBright};
    border-bottom: 1px solid ${({ theme }) => theme.color.borderNormal};

    user-select: none;
    pointer-events: none;
  }

  &::after {
    height: 96px;
    width: 100%;
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    background-color: ${({ theme }) => theme.color.dimThickBright};
    border-top: 1px solid ${({ theme }) => theme.color.borderNormal};

    user-select: none;
    pointer-events: none;
  }
`;

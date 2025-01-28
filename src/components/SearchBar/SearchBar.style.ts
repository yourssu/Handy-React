import { styled } from 'styled-components';

export const StyledContainer = styled.form`
  position: relative;

  width: 100%;
  height: 48px;
  border-radius: ${({ theme }) => theme.semantic.radius.m}px;
  background-color: ${({ theme }) => theme.semantic.color.bgBasicLight};

  display: flex;
  align-items: center;
  gap: 8px;

  padding: 12px;

  &:has(.searchbar-close-button) {
    padding-right: 44px;
  }

  .searchbar-icon {
    color: ${({ theme }) => theme.semantic.color.iconBasicTertiary};
    width: 20px;
    height: 20px;
  }
`;

export const StyledInput = styled.input`
  all: unset;
  ${({ theme }) => theme.typo.B1_Rg_16};

  width: 100%;
  color: ${({ theme }) => theme.semantic.color.textBasicPrimary};

  &::placeholder {
    color: ${({ theme }) => theme.semantic.color.textBasicTertiary};
  }
`;

export const StyledClearButton = styled.button`
  all: unset;
  cursor: pointer;

  width: 20px;
  height: 20px;

  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);

  svg {
    fill: ${({ theme }) => theme.semantic.color.iconBasicTertiary};
    width: 100%;
    height: 100%;
  }
`;

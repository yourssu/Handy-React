import { styled } from 'styled-components';

import { CheckboxSizeType } from '@/components/Checkbox/Checkbox.type';

const getSizeBySizeProp = ($size: CheckboxSizeType) => {
  if ($size === 'small') return 16;
  if ($size === 'medium') return 20;
  if ($size === 'large') return 24;
  return null;
};

const getIconSizeBySizeProp = ($size: CheckboxSizeType) => {
  if ($size === 'small') return 10;
  if ($size === 'medium') return 13;
  if ($size === 'large') return 16;
  return null;
};

export const StyledCheckboxContainer = styled.div`
  width: fit-content;

  display: flex;
  align-items: center;
`;

export const StyledCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;

  &:has([type='checkbox']:disabled) {
    cursor: not-allowed;
  }
`;

export const StyledCheckboxChecker = styled.div<{ $size: CheckboxSizeType }>`
  box-sizing: border-box;

  width: ${({ $size }) => getSizeBySizeProp($size)}px;
  height: ${({ $size }) => getSizeBySizeProp($size)}px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #e3e4e8;
  border-radius: 50%;

  background-color: white;

  svg {
    fill: #e3e4e8;
  }

  &:has(+ input[type='checkbox']:checked) {
    border: none;
    background-color: #6b5cff;

    svg {
      fill: white;
    }
  }

  &:has(+ input[type='checkbox']:disabled) {
    border: none;
    background-color: #e3e4e8;

    svg {
      fill: white;
    }
  }
`;

export const StyledCheckboxCheckIconWrapper = styled.div<{
  $size: CheckboxSizeType;
}>`
  width: ${({ $size }) => getIconSizeBySizeProp($size)}px;
  height: ${({ $size }) => getIconSizeBySizeProp($size)}px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const StyledCheckboxInput = styled.input`
  display: none;
`;

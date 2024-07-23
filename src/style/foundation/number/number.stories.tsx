import { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';

import { semanticRadius } from '@/style/foundation/number/semanticRadius';

const meta: Meta = {
  title: 'Foundation/Number',
  parameters: {
    layout: 'centered',
  },
};

const StyledSpacingExample = styled.div`
  width: 100px;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({ theme }) => theme.semantic.radius.l}px;
  background-color: ${({ theme }) => theme.semantic.color.bgBrandPrimary};
`;

const StyledAllNumbers = styled.div`
  display: flex;
  flex-direction: column;

  gap: 40px;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledRowHeader = styled.h2`
  color: ${({ theme }) => theme.semantic.color.textBasicPrimary};
  ${({ theme }) => theme.typo.T3_Sb_20};
`;

const StyledRowDescription = styled.p`
  color: ${({ theme }) => theme.semantic.color.textBasicTertiary};
  ${({ theme }) => theme.typo.B1_Rg_16};
`;

const StyledRowItemList = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 32px;
`;

const StyledRowItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  span {
    color: ${({ theme }) => theme.semantic.color.textBasicSecondary};
    ${({ theme }) => theme.typo.B3_Rg_14};
  }
`;

const StyledBorderRadiusExample = styled.div<{ value: number }>`
  width: 100px;
  height: 100px;

  color: ${({ theme }) => theme.semantic.color.textBasicWhite};
  ${({ theme }) => theme.typo.B1_Sb_16};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({ value }) => value}px;
  background-color: ${({ theme }) => theme.semantic.color.bgBrandPrimary};
`;

const SpacingExample: StoryObj = {
  render: () => <StyledSpacingExample />,
};

const AllBorderRadius: StoryObj = {
  render: () => (
    <StyledAllNumbers>
      <StyledRow>
        <StyledRowHeader>Border Radius</StyledRowHeader>
        <StyledRowDescription>theme.semantic.spacing</StyledRowDescription>
        <StyledRowItemList>
          {Object.entries(semanticRadius).map(([key, value]) => {
            return (
              <StyledRowItem>
                <StyledBorderRadiusExample value={value}>{key}</StyledBorderRadiusExample>
                <span>{value}px</span>
              </StyledRowItem>
            );
          })}
        </StyledRowItemList>
      </StyledRow>
    </StyledAllNumbers>
  ),
};

export default meta;
export { SpacingExample, AllBorderRadius };

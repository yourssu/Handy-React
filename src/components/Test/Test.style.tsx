import { styled } from 'styled-components';

interface StyledTestProps {
    $color: string;
}
export const StyledTest = styled.div<StyledTestProps>`
    color: ${(props) => props.$color};
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.bgNormal};
    border: solid 1px ${({ theme }) => theme.color.borderNormal};

    ${({ theme }) => theme.typo.body1};
`;

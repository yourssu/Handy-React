import { styled } from "styled-components";

interface StyledTestProps {
    $color: string;
}
export const StyledTest = styled.div<StyledTestProps>`
    color: ${(props) => props.$color};
    width: 100px;
    height: 100px;
    background-color: #f0f0f0;
`;

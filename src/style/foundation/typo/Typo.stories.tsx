import { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';

import { typos, Typo } from '.';

const meta: Meta = {
  title: 'Foundation/Typo',
};
export default meta;

const TypoRow = styled.div`
  display: flex;
  height: 64px;
  align-items: center;
`;

const TypoExample = styled.div<{ $typo: Typo }>`
  ${(props) => props.theme.typo[props.$typo]};
`;

const TypoName = styled.div`
  ${(props) => props.theme.typo.caption0};
  color: ${(props) => props.theme.color.textTertiary};
  width: 120px;
`;

const TypoStory = () => {
  return (
    <>
      {Object.keys(typos).map((key) => (
        <TypoRow key={key}>
          <TypoName>{key}</TypoName>
          <TypoExample key={key} $typo={key as Typo}>
            {key}
          </TypoExample>
        </TypoRow>
      ))}
    </>
  );
};

export const Primary: StoryObj = {
  render: TypoStory,
};

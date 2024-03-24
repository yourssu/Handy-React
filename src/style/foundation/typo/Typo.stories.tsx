import React from 'react';

import { Primary as PrimaryBlock, Controls, Markdown } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';

import TypoDocs from './TypoDocs.md?raw';

import { typos, Typo } from '.';

const meta: Meta = {
  title: 'Foundation/Typos',
  parameters: {
    docs: {
      page: () => (
        <>
          <Markdown>{TypoDocs}</Markdown>
          <PrimaryBlock />
          <Controls />
        </>
      ),
    },
  },
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
  color: ${(props) => props.theme.color.textPrimary};
  width: 120px;
`;

const extractTypoDetails = (typoStyles: string) => {
  const lines = typoStyles.replace(/\s/g, '').split(';');
  return lines.filter(
    (line: string) =>
      line.includes('font-size:') || line.includes('font-weight:') || line.includes('line-height:')
  );
};

const TypoStory = () => {
  return (
    <>
      {Object.entries(typos).map(([typo, styleText]) => (
        <TypoRow key={typo}>
          <TypoName>
            {extractTypoDetails(styleText).map((line) => (
              <React.Fragment key={typo + line}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </TypoName>
          <TypoExample $typo={typo as Typo}>{typo}</TypoExample>
        </TypoRow>
      ))}
    </>
  );
};

export const Primary: StoryObj = {
  render: TypoStory,
};

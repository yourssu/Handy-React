import React from 'react';

import { Primary as PrimaryBlock, Controls, Markdown } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';

import TypoDocs from './TypoDocs.md?raw';

import { typos, TypoENType, TypoKRType } from '.';

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

const extractTypoDetails = (typoStyles: string) => {
  const lines = typoStyles.replace(/\s/g, '').split(';');
  const fontSizeLine = lines.find((line: string) => line.includes('font-size:'));
  const lineHeightLine = lines.find((line: string) => line.includes('line-height:'));
  const letterSpacingLine = lines.find((line: string) => line.includes('letter-spacing:'));

  const fontSize = fontSizeLine?.match(/font-size:(\d+)px/)?.[1];
  const lineHeight = lineHeightLine?.match(/line-height:(\d+)px/)?.[1];
  const letterSpacing = letterSpacingLine?.match(/letter-spacing:(-?[0-9]+(\.[0-9]+)*)/)?.[1];

  console.log(fontSize, lineHeight, letterSpacingLine, letterSpacing);

  return [fontSize, lineHeight, letterSpacing];
};

const TypoGrid = styled.div`
  display: grid;
  grid-template-columns: 160px minmax(520px, 1fr) 60px 60px 60px;
  gap: 20px;
  margin-bottom: 80px;
`;

const TypoName = styled.div`
  align-self: center;
`;

const TypoOptionValue = styled.div`
  justify-self: center;
  align-self: center;
`;

const TypoKRExample = styled.div<{ $typo: TypoKRType }>`
  ${(props) => props.theme.typo.kr[props.$typo]};
`;

const TypoENExample = styled.div<{ $typo: TypoENType }>`
  ${(props) => props.theme.typo.en[props.$typo]};
`;

const TypoGridTitle = styled.div`
  font-weight: 500;
  font-size: 22px;
  margin-bottom: 48px;
`;

const TypoGridHead = () => {
  return (
    <>
      <div>이름</div>
      <div>미리보기</div>
      <div>
        크기<small>(px)</small>
      </div>
      <div>
        행간<small>(px)</small>
      </div>
      <div>
        자간<small>(em)</small>
      </div>
    </>
  );
};

const TypoStory = () => {
  return (
    <>
      <TypoGridTitle>한글 타이포그래피</TypoGridTitle>
      <TypoGrid>
        <TypoGridHead />
        {Object.entries(typos.kr).map(([typo, typoStyles]) => (
          <React.Fragment key={typo}>
            <TypoName>{typo}</TypoName>
            <TypoKRExample $typo={typo as TypoKRType}>나무잎새남실바람이</TypoKRExample>
            {extractTypoDetails(typoStyles).map((detail, index) => (
              <TypoOptionValue key={index}>{detail}</TypoOptionValue>
            ))}
          </React.Fragment>
        ))}
      </TypoGrid>
      <TypoGridTitle>영어 타이포그래피</TypoGridTitle>
      <TypoGrid>
        <TypoGridHead />
        {Object.entries(typos.en).map(([typo, typoStyles]) => (
          <React.Fragment key={typo}>
            <TypoName>{typo}</TypoName>
            <TypoENExample $typo={typo as TypoENType}>ABCDEFGH</TypoENExample>
            {extractTypoDetails(typoStyles).map((detail, index) => (
              <TypoOptionValue key={index}>{detail}</TypoOptionValue>
            ))}
          </React.Fragment>
        ))}
      </TypoGrid>
    </>
  );
};

export const Primary: StoryObj = {
  render: TypoStory,
};

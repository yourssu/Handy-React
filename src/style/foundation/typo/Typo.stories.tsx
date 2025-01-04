import React, { useState } from 'react';

import { Primary as PrimaryBlock, Controls, Markdown } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';

import TypoDocs from './TypoDocs.md?raw';

import { typo, TypoType } from '.';

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

const TypoExample = styled.div<{ $typo: TypoType }>`
  white-space: normal;
  line-break: anywhere;
  ${(props) => props.theme.typo[props.$typo]};
`;

const TypoHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 48px;
`;

const TypoGridTitle = styled.div`
  font-weight: 500;
  font-size: 22px;
`;

const TypoPreviewInput = styled.input`
  all: unset;
  max-width: 700px;
  width: 100%;

  border: 1px solid #d2d0d2;
  border-radius: 9999px;
  padding: 20px 28px;

  &:focus {
    border-color: #222022;
  }
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
  const [preview, setPreivew] = useState('나무잎새남실');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreivew(e.target.value);
  };

  return (
    <>
      <TypoHeader>
        <TypoGridTitle>타이포그래피</TypoGridTitle>
        <div>
          <TypoPreviewInput
            placeholder="텍스트를 입력해주세요..."
            value={preview}
            onChange={onChange}
          />
        </div>
      </TypoHeader>
      <TypoGrid>
        <TypoGridHead />
        {Object.entries(typo).map(([typo, typoStyles]) => (
          <React.Fragment key={typo}>
            <TypoName>{typo}</TypoName>
            <TypoExample $typo={typo as TypoType}>{preview}</TypoExample>
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

/**
 * 이 파일은 iconsAsset/convert.js에 의해 자동 생성되었습니다.
 * 직접 수정하는 대신 iconsAsset/convert.js를 수정하세요.
 */

import { Primary as PrimaryBlock, Controls, Markdown } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';

import IconDocs from './IconDocs.md?raw';
import { IconBase } from './icon.base';

import {
  IcAdbadgeFilled,
  IcAdbadgeLine,
  IcArrowDownLine,
  IcArrowLeftLine,
  IcArrowRightLine,
  IcArrowUpLine,
  IcBellmuteLine,
  IcBellFilled,
  IcBellLine,
  IcBlockuserLine,
  IcBoardFilled,
  IcBoardLine,
  IcBookFilled,
  IcBookLine,
  IcCalendarFilled,
  IcCalendarLine,
  IcCameracircleLine,
  IcCameraFilled,
  IcCameraLine,
  IcCheckcircleFilled,
  IcCheckcircleLine,
  IcCheckLine,
  IcClipLine,
  IcCommentFilled,
  IcCommentLine,
  IcDotbadgeLine,
  IcDotsHorizontalLine,
  IcDotsVerticalLine,
  IcDownloadLine,
  IcEmojiaddLine,
  IcEyeclosedLine,
  IcEyeopenLine,
  IcFoodcalendarFilled,
  IcFoodcalendarLine,
  IcFoodFilled,
  IcFoodLine,
  IcGroundFilled,
  IcGroundLine,
  IcHeartLine,
  IcHomeFilled,
  IcHomeLine,
  IcListLine,
  IcLockFilled,
  IcLockLine,
  IcNewFilled,
  IcNewLine,
  IcNoticeFilled,
  IcNoticeLine,
  IcPenFilled,
  IcPenLine,
  IcPersoncircleLine,
  IcPersonFilled,
  IcPersonLine,
  IcPictureFilled,
  IcPictureLine,
  IcPinFilled,
  IcPinLine,
  IcPlaycircleFilled,
  IcPlaycircleLine,
  IcPlusLine,
  IcRankFilled,
  IcRankLine,
  IcRecommentLine,
  IcRefreshLine,
  IcSavecircleFilled,
  IcSavecircleLine,
  IcSchoolcalendarFilled,
  IcSchoolcalendarLine,
  IcSearchLine,
  IcSettingLine,
  IcSharecircleFilled,
  IcSharecircleLine,
  IcShareLine,
  IcStarFilled,
  IcStarLine,
  IcThumbDownFilled,
  IcThumbDownLine,
  IcThumbUpFilled,
  IcThumbUpLine,
  IcTimecalendarFilled,
  IcTimecalendarLine,
  IcTrashcanFilled,
  IcTrashcanLine,
  IcWarningcircleFilled,
  IcWarningcircleLine,
  IcXcircleFilled,
  IcXLine,
} from '.';

const Icons = [
  IcAdbadgeFilled,
  IcAdbadgeLine,
  IcArrowDownLine,
  IcArrowLeftLine,
  IcArrowRightLine,
  IcArrowUpLine,
  IcBellmuteLine,
  IcBellFilled,
  IcBellLine,
  IcBlockuserLine,
  IcBoardFilled,
  IcBoardLine,
  IcBookFilled,
  IcBookLine,
  IcCalendarFilled,
  IcCalendarLine,
  IcCameracircleLine,
  IcCameraFilled,
  IcCameraLine,
  IcCheckcircleFilled,
  IcCheckcircleLine,
  IcCheckLine,
  IcClipLine,
  IcCommentFilled,
  IcCommentLine,
  IcDotbadgeLine,
  IcDotsHorizontalLine,
  IcDotsVerticalLine,
  IcDownloadLine,
  IcEmojiaddLine,
  IcEyeclosedLine,
  IcEyeopenLine,
  IcFoodcalendarFilled,
  IcFoodcalendarLine,
  IcFoodFilled,
  IcFoodLine,
  IcGroundFilled,
  IcGroundLine,
  IcHeartLine,
  IcHomeFilled,
  IcHomeLine,
  IcListLine,
  IcLockFilled,
  IcLockLine,
  IcNewFilled,
  IcNewLine,
  IcNoticeFilled,
  IcNoticeLine,
  IcPenFilled,
  IcPenLine,
  IcPersoncircleLine,
  IcPersonFilled,
  IcPersonLine,
  IcPictureFilled,
  IcPictureLine,
  IcPinFilled,
  IcPinLine,
  IcPlaycircleFilled,
  IcPlaycircleLine,
  IcPlusLine,
  IcRankFilled,
  IcRankLine,
  IcRecommentLine,
  IcRefreshLine,
  IcSavecircleFilled,
  IcSavecircleLine,
  IcSchoolcalendarFilled,
  IcSchoolcalendarLine,
  IcSearchLine,
  IcSettingLine,
  IcSharecircleFilled,
  IcSharecircleLine,
  IcShareLine,
  IcStarFilled,
  IcStarLine,
  IcThumbDownFilled,
  IcThumbDownLine,
  IcThumbUpFilled,
  IcThumbUpLine,
  IcTimecalendarFilled,
  IcTimecalendarLine,
  IcTrashcanFilled,
  IcTrashcanLine,
  IcWarningcircleFilled,
  IcWarningcircleLine,
  IcXcircleFilled,
  IcXLine,
];

const meta: Meta = {
  title: 'Foundation/Icons',
  component: IconBase,
  parameters: {
    docs: {
      page: () => (
        <>
          <Markdown>{IconDocs}</Markdown>
          <PrimaryBlock />
          <Controls />
        </>
      ),
    },
  },
};
export default meta;

type Story = StoryObj<typeof IconBase>;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Render = (args: any) => {
  return (
    <Container>
      {Icons.map((Icon, index) => (
        <IconWrapper>
          <Icon key={index} {...args} />
          {Icon.displayName}
        </IconWrapper>
      ))}
    </Container>
  );
};

export const Primary: Story = {
  args: {
    size: 24,
  },
  render: Render,
};

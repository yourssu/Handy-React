/**
 * 이 파일은 icons/convert.js에 의해 자동 생성되었습니다.
 * 직접 수정하는 대신 icons/convert.js를 수정하세요.
 */

import { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';

import { IconBase } from './icon.base';

import {
  IcAdbadgeFilled,
  IcAdbadgeLine,
  IcArrowDownLine,
  IcArrowLeftLine,
  IcArrowRightLine,
  IcArrowUpLine,
  IcBellFilled,
  IcBellLine,
  IcBellmuteLine,
  IcBlockuserLine,
  IcBoardFilled,
  IcBoardLine,
  IcBookFilled,
  IcBookLine,
  IcCalendarFilled,
  IcCalendarLine,
  IcCameraFilled,
  IcCameraLine,
  IcCameracircleLine,
  IcCheckLine,
  IcCheckcircleFilled,
  IcCheckcircleLine,
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
  IcFoodFilled,
  IcFoodLine,
  IcFoodcalendarFilled,
  IcFoodcalendarLine,
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
  IcPersonFilled,
  IcPersonLine,
  IcPersoncircleLine,
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
  IcShareLine,
  IcSharecircleFilled,
  IcSharecircleLine,
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
  IcXLine,
  IcXcircleFilled,
} from '.';

const Icons = [
  IcAdbadgeFilled,
  IcAdbadgeLine,
  IcArrowDownLine,
  IcArrowLeftLine,
  IcArrowRightLine,
  IcArrowUpLine,
  IcBellFilled,
  IcBellLine,
  IcBellmuteLine,
  IcBlockuserLine,
  IcBoardFilled,
  IcBoardLine,
  IcBookFilled,
  IcBookLine,
  IcCalendarFilled,
  IcCalendarLine,
  IcCameraFilled,
  IcCameraLine,
  IcCameracircleLine,
  IcCheckLine,
  IcCheckcircleFilled,
  IcCheckcircleLine,
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
  IcFoodFilled,
  IcFoodLine,
  IcFoodcalendarFilled,
  IcFoodcalendarLine,
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
  IcPersonFilled,
  IcPersonLine,
  IcPersoncircleLine,
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
  IcShareLine,
  IcSharecircleFilled,
  IcSharecircleLine,
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
  IcXLine,
  IcXcircleFilled,
];

const meta: Meta = {
  title: 'Foundation/Icons',
  component: IconBase,
};
export default meta;

type Story = StoryObj<typeof IconBase>;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 2rem;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.typo.caption1};
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

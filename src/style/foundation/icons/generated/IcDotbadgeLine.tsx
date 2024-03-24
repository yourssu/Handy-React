/**
 * 이 파일은 iconsAsset/convert.js에 의해 자동 생성되었습니다.
 * 직접 수정하는 대신 iconsAsset/convert.js를 수정하세요.
 */

import { memo, forwardRef } from 'react';

import { IconBase } from '../icon.base';
import { IconProps } from '../icon.type';

export const IcDotbadgeLine = memo(
  forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <IconBase ref={ref} viewBox="0 0 24 24" {...props}>
      <path
        d="M22 7C22 9.76142 19.7614 12 17 12C14.2386 12 12 9.76142 12 7C12 4.23858 14.2386 2 17 2C19.7614 2 22 4.23858 22 7Z"
        xmlns="http://www.w3.org/2000/svg"
      />
    </IconBase>
  ))
);

IcDotbadgeLine.displayName = 'IcDotbadgeLine';

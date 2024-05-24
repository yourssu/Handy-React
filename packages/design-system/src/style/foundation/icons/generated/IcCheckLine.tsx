/**
 * 이 파일은 iconsAsset/convert.js에 의해 자동 생성되었습니다.
 * 직접 수정하는 대신 iconsAsset/convert.js를 수정하세요.
 */

import { memo, forwardRef } from 'react';

import { IconBase } from '../icon.base';
import { IconProps } from '../icon.type';

export const IcCheckLine = memo(
  forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <IconBase ref={ref} viewBox="0 0 24 24" {...props}>
      <g clipPath="url(#clip0_1_247)" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21.7244 4.16907C22.0452 4.43105 22.0929 4.90352 21.8309 5.22436L9.99093 19.7244C9.8436 19.9048 9.62082 20.0065 9.38799 19.9997C9.15517 19.9928 8.93873 19.8782 8.80225 19.6895L2.14225 10.4795C1.89953 10.1438 1.97486 9.67497 2.31051 9.43225C2.64616 9.18953 3.11502 9.26487 3.35774 9.60052L9.44609 18.02L20.6691 4.27564C20.931 3.9548 21.4035 3.90709 21.7244 4.16907Z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </g>
      <defs xmlns="http://www.w3.org/2000/svg">
        <clipPath id="clip0_1_247">
          <rect width="20" height="16" fill="white" transform="translate(2 4)" />
        </clipPath>
      </defs>
    </IconBase>
  ))
);

IcCheckLine.displayName = 'IcCheckLine';

/**
 * 이 파일은 iconsAsset/convert.js에 의해 자동 생성되었습니다.
 * 직접 수정하는 대신 iconsAsset/convert.js를 수정하세요.
 */

import { memo, forwardRef } from 'react';

import { IconBase } from '../icon.base';
import { IconProps } from '../icon.type';

export const IcFlagLine = memo(
  forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <IconBase ref={ref} viewBox="0 0 24 24" {...props}>
      <path
        d="M5 3.77C5.00539 3.35804 5.33804 3.02539 5.75 3.02L5.74 3C6.15421 3 6.49 3.33579 6.49 3.75V4.07H12.75C13.6581 4.01881 14.4363 4.71208 14.49 5.62V5.7C14.5437 6.60792 15.3219 7.3012 16.23 7.25H17.14C18.0427 7.19832 18.8207 7.87852 18.89 8.78V14.08C18.8363 14.9879 18.0581 15.6812 17.15 15.63H11.15C10.2419 15.6812 9.46368 14.9879 9.41 14.08V14.02C9.35632 13.1121 8.57807 12.4188 7.67 12.47H6.5V20.77C6.5 21.1842 6.16421 21.52 5.75 21.52C5.33579 21.52 5 21.1842 5 20.77V3.77ZM12.9 5.66C12.851 5.64583 12.799 5.64583 12.75 5.66V5.68H6.59V10.9H7.67C9.41852 10.8538 10.888 12.2038 10.99 13.95C11.0396 13.9588 11.0904 13.9588 11.14 13.95H17.14C17.1896 13.9588 17.2404 13.9588 17.29 13.95V8.78C17.241 8.76583 17.189 8.76583 17.14 8.78H16.23C14.4517 8.83061 12.9652 7.43786 12.9 5.66Z"
        fillRule="evenodd"
        clipRule="evenodd"
        xmlns="http://www.w3.org/2000/svg"
      />
    </IconBase>
  ))
);

IcFlagLine.displayName = 'IcFlagLine';
/**
 * 이 파일은 icons/convert.js에 의해 자동 생성되었습니다.
 * 직접 수정하는 대신 icons/convert.js를 수정하세요.
 */

import { memo, forwardRef } from 'react';

import { IconBase } from '../icon.base';
import { IconProps } from '../icon.type';

export const IcShareLine = memo(
    forwardRef<SVGSVGElement, IconProps>((props, ref) => (
        <IconBase ref={ref} viewBox="0 0 24 24" {...props}>
            <path
                d="M20 5C20 6.65685 18.6569 8 17 8C15.3431 8 14 6.65685 14 5C14 3.34315 15.3431 2 17 2C18.6569 2 20 3.34315 20 5ZM10 12C10 13.6569 8.65685 15 7 15C5.34315 15 4 13.6569 4 12C4 10.3431 5.34315 9 7 9C8.65685 9 10 10.3431 10 12ZM17 22C18.6569 22 20 20.6569 20 19C20 17.3431 18.6569 16 17 16C15.3431 16 14 17.3431 14 19C14 20.6569 15.3431 22 17 22Z"
                fillRule="evenodd"
                clipRule="evenodd"
                xmlns="http://www.w3.org/2000/svg"
            />
            <path
                d="M17 5L7 12L17 19"
                stroke="#505458"
                strokeWidth="1.5"
                xmlns="http://www.w3.org/2000/svg"
            />
        </IconBase>
    ))
);

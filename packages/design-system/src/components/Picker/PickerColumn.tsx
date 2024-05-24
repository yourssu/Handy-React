import { forwardRef, useEffect, useRef, useState } from 'react';

import { useDOMRef } from '@/hooks/useDOMRef/useDOMRef';

import { PickerColumnOption, PickerColumnProps } from './Picker.type';
import { StyledPickerColumnContainer, StyledPickerColumnOption } from './PickerColumn.style';

export const PickerColumn = forwardRef<HTMLSelectElement, PickerColumnProps>(
  ({ options, value, ...props }, ref) => {
    const domRef = useDOMRef(ref);

    const containerRef = useRef<HTMLDivElement>(null);
    const optionRefs = useRef<Record<(typeof options)[number]['value'], HTMLDivElement>>({});

    useEffect(() => {
      const option = options.find((o) => o.value === value);
      if (!option) return;
      containerRef.current!.scrollTop = optionRefs.current[option.value].offsetTop - 96;
    }, [value, options]);

    const change = (option: PickerColumnOption) => {
      domRef.current!.value = option.value;
      domRef.current!.dispatchEvent(
        new Event('change', {
          bubbles: true,
          cancelable: true,
        })
      );
      containerRef.current!.scrollTop = options.findIndex((o) => o.value === option.value) * 32;
    };

    const [isIgnoreScroll, setIgnoreScroll] = useState(false);
    const ignoreChangeTimer = useRef<NodeJS.Timeout>();

    const changeByPosition = () => {
      const top = containerRef.current!.scrollTop;
      const option = options[Math.round(top / 32)];
      change(option);
    };

    // 모바일 터치 지원
    const onTouchStart = () => {
      setIgnoreScroll(true);
    };
    const onTouchEnd = () => {
      setIgnoreScroll(false);
      setTimeout(() => changeByPosition(), 0);
    };

    // PC 드래그 스크롤
    const isMouseDown = useRef(false);
    const isDragging = useRef(false);
    const firstPosY = useRef<number>();
    const firstMouseY = useRef<number>();
    const isIgnoreClickAfterDrag = useRef(false); // 드래그 종료(mouseUp)과 클릭(click)이 중복 동작하는 것을 방지

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setIgnoreScroll(true);
      isDragging.current = false;
      isMouseDown.current = true;
      firstPosY.current = containerRef.current!.scrollTop;
      firstMouseY.current = e.clientY;
    };

    useEffect(() => {
      if (!containerRef.current) return;

      const onMouseMove = (e: MouseEvent) => {
        if (!isMouseDown.current) return;
        const diff = e.clientY - firstMouseY.current!;
        containerRef.current!.scrollTop = firstPosY.current! - diff;

        if (Math.abs(diff) > 5) {
          isDragging.current = true;
          isIgnoreClickAfterDrag.current = true;
        }
      };

      const onMouseUpOrLeave = () => {
        if (!isMouseDown.current) return;
        isMouseDown.current = false;
        setIgnoreScroll(false);

        if (!isDragging.current) return;
        setTimeout(() => {
          changeByPosition();
        }, 0);
      };

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUpOrLeave);
      window.addEventListener('mouseleave', onMouseUpOrLeave);
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUpOrLeave);
        window.removeEventListener('mouseleave', onMouseUpOrLeave);
      };
    }, []);

    const onScroll = () => {
      clearTimeout(ignoreChangeTimer.current!);
      ignoreChangeTimer.current = setTimeout(() => {
        if (isIgnoreScroll) return;
        changeByPosition();
      }, 100);
    };

    const optionClick = (option: PickerColumnOption) => {
      if (isIgnoreScroll) return;
      if (isIgnoreClickAfterDrag.current) {
        isIgnoreClickAfterDrag.current = false;
        return;
      }
      change(option);
    };

    return (
      <>
        <StyledPickerColumnContainer
          ref={containerRef}
          onScroll={onScroll}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onTouchCancel={onTouchEnd}
          onMouseDown={onMouseDown}
          style={{
            scrollBehavior: isIgnoreScroll ? 'auto' : 'smooth',
          }}
        >
          {options.map((option) => {
            return (
              <StyledPickerColumnOption
                key={option.value}
                ref={(el) => (optionRefs.current[option.value] = el as HTMLDivElement)}
                onClick={() => optionClick(option)}
              >
                {option.label}
              </StyledPickerColumnOption>
            );
          })}
        </StyledPickerColumnContainer>
        <select
          ref={domRef}
          style={{
            display: 'none',
          }}
          value={value}
          {...props}
        >
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </>
    );
  }
);
PickerColumn.displayName = 'PickerColumn';

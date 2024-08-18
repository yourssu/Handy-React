import { useContext, useId, useRef, useState } from 'react';

import { RadioGroupContext } from '@/components/RadioGroup/RadioGroup.context';
import {
  StyledRadioGroupFieldset,
  StyledRadioItemLabel,
} from '@/components/RadioGroup/RadioGroup.style';
import { RadioGroupItemProps, RadioGroupProps } from '@/components/RadioGroup/RadioGroup.type';

export const useRadioGroup = <Values extends string>(initialValue?: Values) => {
  const radioGroupName = useId();
  const groupRef = useRef<HTMLFieldSetElement>(null);

  const RadioGroupItemComponent = ({
    value,
    children,
    disabled = false,
  }: RadioGroupItemProps<Values>) => {
    const ref = useRef<HTMLLabelElement>(null);
    const { orientation, size, currentRadioValue } = useContext(RadioGroupContext);
    const thisChecked = currentRadioValue === value && !disabled;

    const getButtonElementFrom = (node: ChildNode | null) => {
      if (node instanceof HTMLLabelElement) return node.querySelector('button');
      return null;
    };

    const getKeysetByOrientation = () => {
      const previousKey = orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft';
      const nextKey = orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight';
      return { previousKey, nextKey };
    };

    const handleFocusKeyAction = (buttonElement: HTMLButtonElement | null) => {
      if (!buttonElement) return;
      buttonElement.closest('label')?.click();
      buttonElement.focus();
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (!ref.current || !groupRef.current || !orientation) return;

      const previousButton = getButtonElementFrom(ref.current.previousSibling);
      const nextButton = getButtonElementFrom(ref.current.nextSibling);
      const firstButton = getButtonElementFrom(groupRef.current.firstChild);
      const lastButton = getButtonElementFrom(groupRef.current.lastChild);
      const { previousKey, nextKey } = getKeysetByOrientation();

      if (e.code === previousKey) {
        e.preventDefault();
        handleFocusKeyAction(previousButton || lastButton);
      }

      if (e.code === nextKey) {
        e.preventDefault();
        handleFocusKeyAction(nextButton || firstButton);
      }

      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        handleFocusKeyAction(e.currentTarget);
      }
    };

    if (!size) return null;

    return (
      <StyledRadioItemLabel $size={size} ref={ref}>
        <input
          type="radio"
          value={value}
          name={radioGroupName}
          defaultChecked={initialValue === value}
          disabled={disabled}
          tabIndex={-1}
          aria-hidden
        />

        <button
          onKeyDown={onKeyDown}
          role="radio"
          tabIndex={thisChecked ? 0 : -1}
          aria-checked={thisChecked}
        >
          <div className="inner" />
        </button>

        <div data-radio-content>{children}</div>
      </StyledRadioItemLabel>
    );
  };

  const RadioGroupComponent = ({
    size,
    children,
    orientation = 'vertical',
    onValueChange,
  }: RadioGroupProps<Values>) => {
    const [currentRadioValue, setCurrentRadioValue] = useState<Values | undefined>(initialValue);

    const onInput = (e: React.ChangeEvent<HTMLFieldSetElement>) => {
      const { target } = e;
      if (!(target instanceof HTMLInputElement)) return;

      const value = target.value as Values;
      setCurrentRadioValue(value);
      onValueChange?.({ value, event: e });
    };

    return (
      <RadioGroupContext.Provider value={{ orientation, size, currentRadioValue }}>
        <StyledRadioGroupFieldset
          $orientation={orientation}
          onInput={onInput}
          ref={groupRef}
          role="radiogroup"
        >
          {children}
        </StyledRadioGroupFieldset>
      </RadioGroupContext.Provider>
    );
  };

  return Object.assign(RadioGroupComponent, { Item: RadioGroupItemComponent });
};

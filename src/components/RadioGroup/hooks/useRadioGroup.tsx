import { useContext, useId, useRef } from 'react';

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
    const { orientation, size } = useContext(RadioGroupContext);

    const getButtonElementFrom = (node: ChildNode | null) => {
      if (node instanceof HTMLLabelElement) return node.querySelector('button');
      return null;
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (!ref.current || !groupRef.current || !orientation) return;

      const previousButton = getButtonElementFrom(ref.current.previousSibling);
      const nextButton = getButtonElementFrom(ref.current.nextSibling);
      const firstButton = getButtonElementFrom(groupRef.current.firstChild);
      const lastButton = getButtonElementFrom(groupRef.current.lastChild);

      if (!firstButton || !lastButton) return;

      const previousKey = orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft';
      const nextKey = orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight';

      if (e.code === previousKey) {
        const button = previousButton || lastButton;
        button.click();
        button.focus();
      }

      if (e.code === nextKey) {
        const button = nextButton || firstButton;
        button.click();
        button.focus();
      }

      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        e.currentTarget.closest('label')?.click();
        e.currentTarget.focus();
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
        />

        <button onKeyDown={onKeyDown}>
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
    const onInput = (e: React.ChangeEvent<HTMLFieldSetElement>) => {
      const { target } = e;
      if (!(target instanceof HTMLInputElement)) return;
      onValueChange?.({ value: target.value as Values, event: e });
    };

    return (
      <RadioGroupContext.Provider value={{ orientation, size }}>
        <StyledRadioGroupFieldset $orientation={orientation} onInput={onInput} ref={groupRef}>
          {children}
        </StyledRadioGroupFieldset>
      </RadioGroupContext.Provider>
    );
  };

  return Object.assign(RadioGroupComponent, { Item: RadioGroupItemComponent });
};

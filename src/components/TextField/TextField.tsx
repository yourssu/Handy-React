import { forwardRef, useContext, useImperativeHandle, useRef, useState } from 'react';

import { IcCancelFilled } from '@/style';

import { TextFieldContext, textFieldDefaultProps } from './TextField.context';
import {
  StyledClearButton,
  StyledTextFieldContainer,
  StyledTextFieldHelperText,
  StyledTextFieldInput,
  StyledTextFieldInputContainer,
  StyledTextFieldLabel,
} from './TextField.style';
import { ClearButtonProps, TextFieldProps } from './TextField.type';

const Label = ({ children }: React.PropsWithChildren<unknown>) => {
  return <StyledTextFieldLabel>{children}</StyledTextFieldLabel>;
};

const HelperText = ({ children }: React.PropsWithChildren<unknown>) => {
  const {
    isError,
    disabled,
    maxLength,
    text: { length },
  } = useContext(TextFieldContext);

  const isMaxLengthSetted = maxLength !== textFieldDefaultProps.maxLength;

  return (
    <StyledTextFieldHelperText $isError={isError && !disabled}>
      {isMaxLengthSetted ? `(${length}/${maxLength})` : children}
    </StyledTextFieldHelperText>
  );
};

const ClearButton = ({ inputRef, setText, onClick }: ClearButtonProps) => {
  const triggerClearEvent = () => {
    if (!inputRef.current) return;

    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value'
    )?.set;

    nativeInputValueSetter?.call(inputRef.current, '');

    // 리액트 내부적으로 input 이벤트를 change 이벤트로 감지
    inputRef.current.dispatchEvent(new Event('input', { bubbles: true }));
  };

  const onClickHadler = () => {
    if (!inputRef.current) return;

    inputRef.current.focus();
    setText('');
    onClick?.();
    triggerClearEvent();
  };

  return (
    <StyledClearButton className="clear-button" onClick={onClickHadler}>
      <IcCancelFilled size="20px" />
    </StyledClearButton>
  );
};

export const TextField = Object.assign(
  forwardRef<HTMLInputElement, React.PropsWithChildren<TextFieldProps>>(
    (
      {
        children,
        isError = textFieldDefaultProps.isError,
        disabled = textFieldDefaultProps.disabled,
        maxLength = textFieldDefaultProps.maxLength,
        onClearButtonClick,
        ...props
      },
      ref
    ) => {
      const inputRef = useRef<HTMLInputElement>(null);
      const [text, setText] = useState(props.value ?? props.defaultValue ?? '');

      const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;

        if (value.length > maxLength) return;

        setText(value);
        props.onChange?.(e);
      };

      useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

      return (
        <TextFieldContext.Provider value={{ isError, disabled, maxLength, text }}>
          <StyledTextFieldContainer>
            <StyledTextFieldInputContainer>
              <StyledTextFieldInput
                {...props}
                $isError={isError && !disabled}
                ref={inputRef}
                type="text"
                value={text}
                onChange={onChange}
                disabled={disabled}
                spellCheck={false}
                tabIndex={0}
                maxLength={maxLength}
              />
              {text && !disabled && (
                <ClearButton inputRef={inputRef} setText={setText} onClick={onClearButtonClick} />
              )}
            </StyledTextFieldInputContainer>

            {children}
          </StyledTextFieldContainer>
        </TextFieldContext.Provider>
      );
    }
  ),
  {
    Label,
    HelperText,
  }
);

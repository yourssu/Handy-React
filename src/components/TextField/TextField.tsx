import { forwardRef, useContext, useImperativeHandle, useRef, useState } from 'react';

import { IcCancelFilled } from '@/style';

import { TextFieldContext } from './TextField.context';
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
  const { isError, disabled } = useContext(TextFieldContext);
  if (isError === undefined || disabled === undefined) return null;
  return (
    <StyledTextFieldHelperText $isError={isError && !disabled}>
      {children}
    </StyledTextFieldHelperText>
  );
};

const ClearButton = ({ inputRef, setText }: ClearButtonProps) => {
  const onClick = () => {
    if (!inputRef.current) return;

    inputRef.current.focus();
    setText('');
  };

  return (
    <StyledClearButton className="clear-button" onClick={onClick}>
      <IcCancelFilled size="20px" />
    </StyledClearButton>
  );
};

export const TextField = Object.assign(
  forwardRef<HTMLInputElement, React.PropsWithChildren<TextFieldProps>>(
    ({ children, isError = false, disabled = false, ...props }, ref) => {
      const inputRef = useRef<HTMLInputElement>(null);
      const [text, setText] = useState('');

      const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
      };

      useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

      return (
        <TextFieldContext.Provider value={{ isError, disabled }}>
          <StyledTextFieldContainer>
            <StyledTextFieldInputContainer>
              <StyledTextFieldInput
                {...props}
                $isError={isError && !disabled}
                ref={inputRef}
                type="text"
                placeholder="input text"
                value={text}
                onChange={onChange}
                disabled={disabled}
                spellCheck={false}
                tabIndex={0}
              />
              {text && !disabled && <ClearButton inputRef={inputRef} setText={setText} />}
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

import {
  FormEvent,
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react';
import { FieldError } from 'react-hook-form';
import { Container, InputContainer, MessageError, PlaceholderWarning } from './styles';
import { useIMask } from 'react-imask';
import { mergeRefs } from 'react-merge-refs';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  remWidth: number;
  optional?: boolean;
  error?: FieldError;
  setDefaultValue?: string;
  mask?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    error,
    setDefaultValue = '',
    remWidth,
    mask = '',
    optional = false,
    ...rest
  }: InputProps,
  ref,
) => {
  const { ref: iMaskRef, setValue } = useIMask({ mask });

  useEffect(() => {
    setValue(setDefaultValue);
  }, [setDefaultValue, setValue]);

  return (
    <Container>
      {!!error && <MessageError isInvalid={!!error}>{error?.message}</MessageError>}
      <InputContainer
        name={name}
        id={name}
        ref={mergeRefs([iMaskRef, ref])}
        remWidth={remWidth}
        isInvalid={!!error}
        {...rest}
      />
      {optional && <PlaceholderWarning remWidth={remWidth}>Opcional</PlaceholderWarning>}
    </Container>
  );
};

export const Input = forwardRef(InputBase);

interface InputWithCallbackProps extends InputHTMLAttributes<HTMLInputElement> {
  remWidth: number;
  optional?: boolean;
  error?: FieldError;
  setDefaultValue?: string;
  callback: (value: string) => void;
  lengthUnmaskedValueConditionToCallback: number;
  mask?: string;
}

const InputWithCallbackBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputWithCallbackProps
> = (
  {
    name,
    error,
    setDefaultValue = '',
    remWidth,
    mask = '',
    optional = false,
    lengthUnmaskedValueConditionToCallback,
    callback,
    ...rest
  }: InputWithCallbackProps,
  ref,
) => {
  const { ref: iMaskRef, setValue, unmaskedValue } = useIMask({ mask });

  useEffect(() => {
    setValue(setDefaultValue);
  }, [setDefaultValue, setValue]);

  useEffect(() => {
    if (unmaskedValue.length === lengthUnmaskedValueConditionToCallback)
      callback(unmaskedValue);
  }, [unmaskedValue]);

  return (
    <Container>
      {!!error && <MessageError isInvalid={!!error}>{error?.message}</MessageError>}
      <InputContainer
        name={name}
        id={name}
        ref={mergeRefs([iMaskRef, ref])}
        remWidth={remWidth}
        isInvalid={!!error}
        {...rest}
      />
      {optional && <PlaceholderWarning remWidth={remWidth}>Opcional</PlaceholderWarning>}
    </Container>
  );
};

export const InputWithCallback = forwardRef(InputWithCallbackBase);

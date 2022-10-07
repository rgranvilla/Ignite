import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import { Container, InputContainer, MessageError, PlaceholderWarning } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  remWidth: number;
  optional?: boolean;
  error?: FieldError;
  setDefaultValue?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error, setDefaultValue = '', remWidth, optional = false, ...rest }: InputProps,
  ref,
) => {
  return (
    <Container>
      {!!error && <MessageError isInvalid={!!error}>{error?.message}</MessageError>}
      <InputContainer
        name={name}
        id={name}
        ref={ref}
        remWidth={remWidth}
        isInvalid={!!error}
        {...rest}
      />
      {optional && <PlaceholderWarning remWidth={remWidth}>Opcional</PlaceholderWarning>}
    </Container>
  );
};

export const Input = forwardRef(InputBase);

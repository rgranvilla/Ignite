import { FormEvent, InputHTMLAttributes, useState } from 'react';
import { Container, InputContainer, PlaceholderWarning } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  remWidth: number;
  optional?: boolean;
  callback?: () => void;
}

function Input({ remWidth, optional = false, callback, ...rest }: InputProps) {
  const [text, setText] = useState<string>('');
  function handleOnChangeText(value: string) {
    setText(value);
  }
  return (
    <Container>
      <InputContainer
        remWidth={remWidth}
        {...rest}
        onChange={(event) => handleOnChangeText(event.target.value)}
      />
      {optional && text.length <= 0 && (
        <PlaceholderWarning remWidth={remWidth}>Opcional</PlaceholderWarning>
      )}
    </Container>
  );
}

export { Input };

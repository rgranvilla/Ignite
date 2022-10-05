import styled from 'styled-components';

interface InputType {
  remWidth: number;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const InputContainer = styled.input<InputType>`
  width: ${(props) => props.remWidth}rem;
  height: 2.625rem;

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  background: ${(props) => props.theme['base-input']};

  padding: 0.75rem;

  &::placeholder {
    position: relative;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border-color: ${(props) => props.theme['yellow-dark']};
  }
`;

export const PlaceholderWarning = styled.span<InputType>`
  position: absolute;

  padding-right: 1rem;

  font-size: 0.75rem;
  font-style: italic;
  transform: translateX(calc(${(props) => props.remWidth * 16 - 80}px));

  color: ${(props) => props.theme['base-label']};
`;

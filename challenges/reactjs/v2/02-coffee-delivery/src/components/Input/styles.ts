import styled, { css } from 'styled-components';

interface InputType {
  remWidth: number;
  isInvalid: boolean;
}

interface PlaceholderWarningType {
  remWidth: number;
}

interface MessageErrorType {
  isInvalid: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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

  ${(props) =>
    props.isInvalid &&
    css`
      border-color: red;
    `}
`;

export const PlaceholderWarning = styled.span<PlaceholderWarningType>`
  position: absolute;

  padding-right: 1rem;

  font-size: 0.75rem;
  font-style: italic;
  transform: translateX(calc(${(props) => props.remWidth * 16 - 80}px));

  color: ${(props) => props.theme['base-label']};
`;

export const MessageError = styled.span<MessageErrorType>`
  ${(props) =>
    props.isInvalid
      ? css`
          visibility: visible;
        `
      : css`
          visibility: hidden;
        `};
  position: absolute;
  padding-right: 0.5rem;
  font-size: 0.625rem;
  color: red;
  white-space: nowrap;
  transform: translate(0, -12px);
`;

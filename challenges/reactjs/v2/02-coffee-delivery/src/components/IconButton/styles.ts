import styled, { css } from 'styled-components';

interface IconButtonSelectProps {
  isSelected: boolean;
}

export const IconButtonSelectContainer = styled.button<IconButtonSelectProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  border: 0;
  border-radius: 6px;
  padding: 1rem;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  svg {
    color: ${(props) => props.theme.purple};
  }

  font-size: 0.75rem;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  ${(props) =>
    props.isSelected &&
    css`
      background: ${(props) => props.theme['purple-light']};
      box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
    `}
`;

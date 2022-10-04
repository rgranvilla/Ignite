import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const CartButtonContainer = styled.button`
  width: 3.25rem;
  height: 3.25rem;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 6px;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => shade(0.02, props.theme['yellow-light'])};
  }
`;

interface CounterProps {
  hasItem: boolean;
}

export const CounterWrapper = styled.div<CounterProps>`
  height: 1.25rem;
  width: 1.25rem;

  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);

  color: ${(props) => props.theme.white};

  background: ${(props) => props.theme['yellow-dark']};
  border-radius: 9999px;

  opacity: ${(props) => (props.hasItem ? 1 : 0)};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.75rem;
`;

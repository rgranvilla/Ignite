import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface CartButtonProps {
  bgColor: 'purple-dark' | 'yellow-light';
  fillColor: 'base-card' | 'yellow-dark';
}

export const CartButtonContainer = styled.button<CartButtonProps>`
  width: 2.375rem;
  height: 2.375rem;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 6px;

  background: ${(props) => props.theme[props.bgColor]};
  color: ${(props) => props.theme[props.fillColor]};

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      shade(
        0.05,
        props.bgColor === 'purple-dark'
          ? props.theme['purple']
          : props.theme['yellow-light'],
      )};
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

import styled from 'styled-components';
import { shade } from 'polished';

export const LocationButtonContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};

  border: 0;
  border-radius: 6px;
  padding: 0.5rem;

  transition: background-color 0.2s;

  span {
    color: ${(props) => props.theme['purple-dark']};
    font-size: 0.875rem;
  }

  &:hover {
    background-color: ${(props) => shade(0.02, props.theme['purple-light'])};
  }
`;

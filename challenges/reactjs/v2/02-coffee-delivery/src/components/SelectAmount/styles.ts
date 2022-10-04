import styled from 'styled-components';

export const SelectAmountContainer = styled.div`
  height: 2.375rem;
  padding: 0 0.5rem;
  gap: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${(props) => props.theme['purple']};

  svg {
    cursor: pointer;
  }

  svg:hover {
    color: ${(props) => props.theme['purple-dark']};
  }

  span {
    font-size: 1rem;
    text-align: center;
    color: ${(props) => props.theme['base-title']};
    cursor: default;
  }

  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
`;

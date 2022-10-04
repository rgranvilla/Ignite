import styled from 'styled-components';

export const RemoveButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;

  border: 0;
  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`;

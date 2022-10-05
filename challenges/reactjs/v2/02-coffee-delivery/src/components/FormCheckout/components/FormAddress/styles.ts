import styled from 'styled-components';

export const FormAddressContainer = styled.div`
  background: ${(props) => props.theme['base-card']};

  border-radius: 6px;
  padding: 2.5rem;

  header {
    display: flex;
    gap: 0.5rem;

    margin-bottom: 2rem;

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const HeaderContent = styled.div`
  h1 {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

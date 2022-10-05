import styled from 'styled-components';

export const FormPaymentContainer = styled.div`
  margin-top: 0.75rem;
  padding: 2.5rem;

  border-radius: 6px;

  background: ${(props) => props.theme['base-card']};
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

export const HeaderTitle = styled.h1`
  font-size: 1rem;
  color: ${(props) => props.theme['base-subtitle']};
`;

export const HeaderSubtitle = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-subtitle']};
`;

export const PaymentSelectButtonsContainer = styled.div`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;
`;

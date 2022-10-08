import styled from 'styled-components';

export const CartContainer = styled.div`
  min-width: 28rem;
`;

export const TitleWrapper = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 130%;

  margin-bottom: 1rem;
`;

export const CartCardContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;

  border-radius: 6px 44px;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CartResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const CartResumeItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }

  p {
    font-size: 1rem;
    text-align: right;
    color: ${(props) => props.theme['base-text']};
  }
`;

export const CartResumeTotal = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 1.25rem;
    font-weight: 700;
    text-align: right;
    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const ConfirmationButton = styled.button`
  padding: 0.75rem 0;

  border: 0;
  border-radius: 6px;

  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  font-size: 0.875rem;
  font-weight: 700;
  line-height: 160%;

  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`;

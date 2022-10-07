import styled from 'styled-components';

export const CheckoutContainer = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2.5rem;
`;

export const FormCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 130%;

  margin-bottom: 1rem;
`;

/*************************************************************** */
//Form Address                                                   //
/*************************************************************** */

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

  .addressForm {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const AddressHeaderContent = styled.div`
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

/*************************************************************** */
//Form Payment                                                   //
/*************************************************************** */

export const FormPaymentContainer = styled.div`
  margin-top: 0.75rem;
  padding: 2.5rem;

  border-radius: 6px;

  background: ${(props) => props.theme['base-card']};
`;

export const RadioGroupContainer = styled.div`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;

  input[type='radio'] {
    display: none;
    &:checked {
      + .box {
        box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
      }
    }
  }
`;

export const RadioButtonWrapper = styled.div`
  height: 3rem;

  border: 0;
  border-radius: 6px;

  position: relative;

  cursor: pointer;

  white-space: nowrap;
  background-color: ${(props) => props.theme['base-button']};

  span {
    position: absolute;
    left: 1rem;
    right: 0;
    top: 1rem;
    bottom: 1rem;
    font-size: 0.75em;

    user-select: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme['base-text']};

    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
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

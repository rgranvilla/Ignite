import { Cart } from '../../components/Cart';
import { FormCheckout } from '../../components/FormCheckout';
import { CheckoutContainer } from './styles';

function Checkout() {
  return (
    <CheckoutContainer>
      <FormCheckout />
      <Cart />
    </CheckoutContainer>
  );
}

export { Checkout };

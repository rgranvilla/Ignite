import { Cart } from '../../components/Cart';
import { CheckoutContainer } from './styles';

function Checkout() {
  return (
    <CheckoutContainer>
      <h1>Complete seu pedido</h1>
      <Cart />
    </CheckoutContainer>
  );
}

export { Checkout };

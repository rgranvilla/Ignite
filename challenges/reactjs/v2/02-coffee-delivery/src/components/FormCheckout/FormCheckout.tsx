import { FormAddress } from './components/FormAddress';
import { FormPayment } from './components/FormPayment';
import { FormCheckoutContainer, TitleWrapper } from './styles';

function FormCheckout() {
  return (
    <FormCheckoutContainer>
      <TitleWrapper>Complete seu pedido</TitleWrapper>

      <FormAddress />
      <FormPayment />
    </FormCheckoutContainer>
  );
}

export { FormCheckout };

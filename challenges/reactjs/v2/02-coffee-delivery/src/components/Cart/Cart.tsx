import { CartProductCard } from '../CartProductCard';
import {
  CartCardContainer,
  CartContainer,
  CartResumeContainer,
  CartResumeItem,
  CartResumeTotal,
  ConfirmationButton,
  TitleWrapper,
} from './styles';

function Cart() {
  return (
    <CartContainer>
      <TitleWrapper>Cafés selecionados</TitleWrapper>
      <CartCardContainer>
        <CartProductCard />
        <CartProductCard />
        <CartResumeContainer>
          <CartResumeItem>
            <span>Total de itens</span>
            <p>R$ 29,70</p>
          </CartResumeItem>
          <CartResumeItem>
            <span>Entrega</span>
            <p>R$ 3,50</p>
          </CartResumeItem>
          <CartResumeTotal>
            <span>Total</span>
            <span>R$ 33,20</span>
          </CartResumeTotal>
        </CartResumeContainer>

        <ConfirmationButton>CONFIRMAR PEDIDO</ConfirmationButton>
      </CartCardContainer>
    </CartContainer>
  );
}

export { Cart };

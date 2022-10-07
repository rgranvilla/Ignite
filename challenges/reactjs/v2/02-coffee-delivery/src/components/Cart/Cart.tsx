import { useContext } from 'react';

import { OrderContext } from '../../contexts/OrderContext';
import { formatPrice } from '../../utils/formatPrice';
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

interface CartProps {
  onSubmit: () => void;
}

function Cart({ onSubmit }: CartProps) {
  const { cart, totalCart, addCartItemAmount, decreaseCartItemAmount, removeCartItem } =
    useContext(OrderContext);
  const total = formatPrice.format(totalCart / 100);
  return (
    <CartContainer>
      <TitleWrapper>Cafés selecionados</TitleWrapper>
      <CartCardContainer>
        {cart.map((item) => (
          <CartProductCard
            key={item.id}
            data={item}
            onAdd={() => addCartItemAmount(item.id)}
            onDecreased={() => decreaseCartItemAmount(item.id)}
            onDelete={() => removeCartItem(item.id)}
          />
        ))}
        <CartResumeContainer>
          <CartResumeItem>
            <span>Total dos itens</span>
            <p>R$ 29,70</p>
          </CartResumeItem>
          <CartResumeItem>
            <span>Entrega</span>
            <p>R$ 3,50</p>
          </CartResumeItem>
          <CartResumeTotal>
            <span>Total</span>
            <span>R$ {total}</span>
          </CartResumeTotal>
        </CartResumeContainer>

        <ConfirmationButton type="submit" onClick={onSubmit}>
          CONFIRMAR PEDIDO
        </ConfirmationButton>
      </CartCardContainer>
    </CartContainer>
  );
}

export { Cart };

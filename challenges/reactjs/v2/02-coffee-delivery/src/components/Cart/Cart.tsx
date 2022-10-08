import { useContext } from 'react';

import { OrderContext } from '../../contexts/OrderContext';
import { IProductDTO } from '../../database/db-coffee';
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
  const {
    products,
    cart,
    deliveryPrice,
    cartTotal,
    incrementCartProduct,
    decrementCartProduct,
    deleteCartProduct,
  } = useContext(OrderContext);
  const formatedDeliveryPrice = formatPrice.format(deliveryPrice / 100);
  const formatedCartTotal = formatPrice.format(cartTotal / 100);
  const total = formatPrice.format((deliveryPrice + cartTotal) / 100);
  return (
    <CartContainer>
      <TitleWrapper>Cafés selecionados</TitleWrapper>
      <CartCardContainer>
        {cart.map((item) => {
          const product = products.find(({ id }) => item.productId === id) as IProductDTO;

          return (
            <CartProductCard
              key={item.id}
              data={item}
              onIncrement={() => incrementCartProduct(product)}
              onDecrement={() => decrementCartProduct(product)}
              onDelete={() => deleteCartProduct(item.id)}
            />
          );
        })}
        <CartResumeContainer>
          <CartResumeItem>
            <span>Total dos itens</span>
            <p>R$ {formatedCartTotal}</p>
          </CartResumeItem>
          <CartResumeItem>
            <span>Entrega</span>
            <p>R$ {formatedDeliveryPrice}</p>
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

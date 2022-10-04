import { ShoppingCart } from 'phosphor-react';
import { CartButtonContainer, CounterWrapper } from './styles';

interface CartButtonProps {
  counter?: number;
}

function CartButton({ counter = 0 }: CartButtonProps) {
  const hasItem = counter > 0;
  return (
    <CartButtonContainer>
      <ShoppingCart size={22} weight="fill" />
      <CounterWrapper hasItem={hasItem}>{counter}</CounterWrapper>
    </CartButtonContainer>
  );
}

export { CartButton };

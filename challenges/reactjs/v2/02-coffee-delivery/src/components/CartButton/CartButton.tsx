import { ShoppingCart } from 'phosphor-react';
import { CartButtonContainer, CounterWrapper } from './styles';

interface CartButtonProps {
  counter?: number;
  bgColor?: 'purple-dark' | 'yellow-light';
  fillColor?: 'base-card' | 'yellow-dark';
}

function CartButton({
  counter = 0,
  bgColor = 'purple-dark',
  fillColor = 'base-card',
}: CartButtonProps) {
  const hasItem = counter > 0;
  return (
    <CartButtonContainer bgColor={bgColor} fillColor={fillColor}>
      <ShoppingCart size={22} weight="fill" />
      <CounterWrapper hasItem={hasItem}>{counter}</CounterWrapper>
    </CartButtonContainer>
  );
}

export { CartButton };

import { ShoppingCart } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartButtonContainer, CounterWrapper } from './styles';

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  counter?: number;
  bgColor?: 'purple-dark' | 'yellow-light';
  fillColor?: 'base-card' | 'yellow-dark';
}

function CartButton({
  counter = 0,
  bgColor = 'purple-dark',
  fillColor = 'base-card',
  ...rest
}: CartButtonProps) {
  const navigate = useNavigate();

  function handleOnClick() {
    navigate('/checkout');
  }

  const hasItem = counter > 0;
  return (
    <CartButtonContainer
      bgColor={bgColor}
      fillColor={fillColor}
      onClick={handleOnClick}
      {...rest}
    >
      <ShoppingCart size={22} weight="fill" />
      <CounterWrapper hasItem={hasItem}>{counter}</CounterWrapper>
    </CartButtonContainer>
  );
}

export { CartButton };

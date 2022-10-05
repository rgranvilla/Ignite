import { LocationButton } from '../LocationButton';

import { HeaderContainer } from './styles';

import logo from '../../assets/logo-coffee-delivery.svg';
import { CartButton } from '../CartButton';
import { useContext } from 'react';
import { CartContext, CartContextType } from '../../contexts/CartContext';

function Header() {
  const { cart } = useContext(CartContext);
  const amountItems = cart.length;
  return (
    <HeaderContainer>
      <img src={logo} />
      <nav>
        <LocationButton />
        <CartButton
          counter={amountItems}
          bgColor={'yellow-light'}
          fillColor={'yellow-dark'}
        />
      </nav>
    </HeaderContainer>
  );
}

export { Header };

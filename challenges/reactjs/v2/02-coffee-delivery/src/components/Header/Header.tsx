import { LocationButton } from '../LocationButton';

import { HeaderContainer } from './styles';

import logo from '../../assets/logo-coffee-delivery.svg';
import { CartButton } from '../CartButton';
import { useContext } from 'react';
import { OrderContext } from '../../contexts/OrderContext';

function Header() {
  const { cart } = useContext(OrderContext);
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

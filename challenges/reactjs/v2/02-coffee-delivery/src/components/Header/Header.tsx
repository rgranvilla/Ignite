import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { OrderContext } from '../../contexts/OrderContext';
import { LocationButton } from '../LocationButton';
import { CartButton } from '../CartButton';

import { HeaderContainer } from './styles';

import logo from '../../assets/logo-coffee-delivery.svg';

function Header() {
  const [disableButton, setDisableButton] = useState<boolean>(true);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { cart } = useContext(OrderContext);
  const amountItems = cart.length;

  useEffect(() => {
    pathname === '/checkout' ? setDisableButton(true) : setDisableButton(false);
  }, [pathname]);

  return (
    <HeaderContainer>
      <img src={logo} onClick={() => navigate('/')} />
      <nav>
        <LocationButton />
        <CartButton
          counter={amountItems}
          bgColor={'yellow-light'}
          fillColor={'yellow-dark'}
          disabled={disableButton}
        />
      </nav>
    </HeaderContainer>
  );
}

export { Header };

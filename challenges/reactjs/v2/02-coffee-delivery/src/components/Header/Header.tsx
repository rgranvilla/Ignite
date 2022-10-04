import { LocationButton } from '../LocationButton';

import { HeaderContainer } from './styles';

import logo from '../../assets/logo-coffee-delivery.svg';
import { CartButton } from '../CartButton';

function Header() {
  return (
    <HeaderContainer>
      <img src={logo} />
      <nav>
        <LocationButton />
        <CartButton counter={2} />
      </nav>
    </HeaderContainer>
  );
}

export { Header };

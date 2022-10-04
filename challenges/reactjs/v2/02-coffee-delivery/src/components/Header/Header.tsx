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
        <CartButton />
      </nav>
    </HeaderContainer>
  );
}

export { Header };

import { LocationButton } from '../LocationButton';

import { HeaderContainer } from './styles';

import logo from '../../assets/logo-coffee-delivery.svg';

function Header() {
  return (
    <HeaderContainer>
      <img src={logo} />
      <nav>
        <LocationButton />
        <button>Cart</button>
      </nav>
    </HeaderContainer>
  );
}

export { Header };

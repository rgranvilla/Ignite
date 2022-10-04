import logo from '../../assets/logo-coffee-delivery.svg';
import { HeaderContainer } from './styles';

function Header() {
  return (
    <HeaderContainer>
      <img src={logo} />
      <nav>
        <button>Localização</button>
        <button>Cart</button>
      </nav>
    </HeaderContainer>
  );
}

export { Header };

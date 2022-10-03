import { HeaderContainer } from "./styles";
import logo from "../../assets/ignite-logo.svg";
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <NavLink to="/" end title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}

export { Header };

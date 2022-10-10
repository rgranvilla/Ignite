import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import LogoImg from "../../assets/logo.svg";

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoImg} alt="" />

        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}

export { Header };

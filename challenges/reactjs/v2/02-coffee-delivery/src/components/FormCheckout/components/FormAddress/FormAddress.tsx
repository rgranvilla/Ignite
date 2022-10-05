import { MapPinLine } from 'phosphor-react';
import { Input } from './components/Input';

import { FormAddressContainer, HeaderContent, RowContainer } from './styles';

function FormAddress() {
  return (
    <FormAddressContainer>
      <header>
        <MapPinLine size={22} />
        <HeaderContent>
          <h1>Endereço de Entrega</h1>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </HeaderContent>
      </header>
      <form action="">
        <RowContainer>
          <Input remWidth={12.5} placeholder="CEP" required />
        </RowContainer>
        <RowContainer>
          <Input remWidth={35} placeholder="Rua" required />
        </RowContainer>
        <RowContainer>
          <Input remWidth={12.5} type="text" placeholder="Número" required />
          <Input remWidth={21.75} type="text" placeholder="Complemento" optional />
        </RowContainer>
        <RowContainer>
          <Input remWidth={12.5} type="text" placeholder="Bairro" required />
          <Input remWidth={17.25} type="text" placeholder="Cidade" required />
          <Input remWidth={3.75} type="text" placeholder="UF" required />
        </RowContainer>
      </form>
    </FormAddressContainer>
  );
}

export { FormAddress };

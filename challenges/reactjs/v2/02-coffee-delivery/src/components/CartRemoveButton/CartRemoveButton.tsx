import { Trash } from 'phosphor-react';
import { RemoveButtonContainer } from './styles';

function CartRemoveButton() {
  return (
    <RemoveButtonContainer>
      <Trash />
      <span>REMOVER</span>
    </RemoveButtonContainer>
  );
}

export { CartRemoveButton };

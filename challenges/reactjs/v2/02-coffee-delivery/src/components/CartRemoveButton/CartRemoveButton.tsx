import { Trash } from 'phosphor-react';
import { RemoveButtonContainer } from './styles';

function CartRemoveButton() {
  return (
    <RemoveButtonContainer>
      <Trash size={16} />
      <span>REMOVER</span>
    </RemoveButtonContainer>
  );
}

export { CartRemoveButton };

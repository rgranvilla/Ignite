import { Trash } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';
import { RemoveButtonContainer } from './styles';

interface CartRemoveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function CartRemoveButton({ ...rest }) {
  return (
    <RemoveButtonContainer {...rest}>
      <Trash size={16} />
      <span>REMOVER</span>
    </RemoveButtonContainer>
  );
}

export { CartRemoveButton };

import { Minus, Plus } from 'phosphor-react';

import { SelectAmountContainer } from './styles';

interface SelectAmountProps {
  amount: number;
  onAdd: () => void;
  onDecrease: () => void;
}

function SelectAmount({ amount = 0, onAdd, onDecrease }: SelectAmountProps) {
  return (
    <SelectAmountContainer>
      <Minus onClick={onDecrease} />
      <span>{amount}</span>
      <Plus onClick={onAdd} />
    </SelectAmountContainer>
  );
}

export { SelectAmount };

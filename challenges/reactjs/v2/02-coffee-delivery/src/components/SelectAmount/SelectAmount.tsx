import { Minus, Plus } from 'phosphor-react';

import { SelectAmountContainer } from './styles';

interface SelectAmountProps {
  amount: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

function SelectAmount({ amount = 0, onIncrement, onDecrement }: SelectAmountProps) {
  return (
    <SelectAmountContainer>
      <Minus onClick={onDecrement} />
      <span>{amount}</span>
      <Plus onClick={onIncrement} />
    </SelectAmountContainer>
  );
}

export { SelectAmount };

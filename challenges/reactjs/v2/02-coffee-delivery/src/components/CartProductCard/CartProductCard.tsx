import { CartItemDTO } from '../../contexts/Cart/reducers/reducer';
import { formatPrice } from '../../utils/formatPrice';
import { CartRemoveButton } from '../CartRemoveButton';

import { SelectAmount } from '../SelectAmount';

import {
  CartProductCardContainer,
  CartProductCardContent,
  DescriptionContent,
  DescriptionControllsButtons,
  PriceContainer,
  DescriptionRightContent,
  DescriptionTitleContent,
} from './styles';

interface CartProductCardProps {
  data: CartItemDTO;
  onAdd: () => void;
  onDecreased: () => void;
  onDelete: () => void;
}

function CartProductCard({ data, onAdd, onDecreased, onDelete }: CartProductCardProps) {
  const { name, amount, price, image } = data;
  const subtotal = formatPrice.format((price * amount) / 100);

  return (
    <CartProductCardContainer>
      <CartProductCardContent>
        <DescriptionContent>
          <img src={image} />
          <DescriptionRightContent>
            <DescriptionTitleContent>{name}</DescriptionTitleContent>
            <DescriptionControllsButtons>
              <SelectAmount amount={amount} onAdd={onAdd} onDecrease={onDecreased} />
              <CartRemoveButton onClick={onDelete} />
            </DescriptionControllsButtons>
          </DescriptionRightContent>
        </DescriptionContent>
        <PriceContainer>R$ {subtotal}</PriceContainer>
      </CartProductCardContent>
    </CartProductCardContainer>
  );
}

export { CartProductCard };

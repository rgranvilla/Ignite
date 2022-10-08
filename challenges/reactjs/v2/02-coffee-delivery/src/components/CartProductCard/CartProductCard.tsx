import { ICartProductDTO } from '../../reducers/reducer';
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
  data: ICartProductDTO;
  onIncrement: () => void;
  onDecrement: () => void;
  onDelete: () => void;
}

function CartProductCard({
  data,
  onIncrement,
  onDecrement,
  onDelete,
}: CartProductCardProps) {
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
              <SelectAmount
                amount={amount}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
              />
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

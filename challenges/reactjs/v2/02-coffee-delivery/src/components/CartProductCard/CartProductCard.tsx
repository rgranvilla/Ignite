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

function CartProductCard() {
  return (
    <CartProductCardContainer>
      <CartProductCardContent>
        <DescriptionContent>
          <img src={'./expresso.svg'} />
          <DescriptionRightContent>
            <DescriptionTitleContent>Expresso Tradicional</DescriptionTitleContent>
            <DescriptionControllsButtons>
              <SelectAmount amount={2} onAdd={() => {}} onDecrease={() => {}} />
              <CartRemoveButton />
            </DescriptionControllsButtons>
          </DescriptionRightContent>
        </DescriptionContent>
        <PriceContainer>R$ 9,90</PriceContainer>
      </CartProductCardContent>
    </CartProductCardContainer>
  );
}

export { CartProductCard };

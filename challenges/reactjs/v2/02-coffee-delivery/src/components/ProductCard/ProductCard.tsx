import {
  BuyBarContainer,
  BuyControllsContainer,
  BuyPriceContainer,
  ChipContainer,
  ChipWrapper,
  ContentWrapper,
  ProductCardContainer,
  Subtitle,
  Title,
} from './styles';

import { SelectAmount } from '../SelectAmount';
import { CartButton } from '../CartButton';
import { IProductDTO } from '../../database/db-coffee';
import { formatPrice } from '../../utils/formatPrice';

interface ProductCardProps {
  product: IProductDTO;
  amount: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

function ProductCard({ product, amount, onDecrement, onIncrement }: ProductCardProps) {
  const { id, image, type, title, description, price } = product;

  const formatedPrice = formatPrice.format(price / 100);

  return (
    <ProductCardContainer>
      <img src={image} />
      <ContentWrapper>
        <ChipContainer>
          {type.map((chip: string) => (
            <ChipWrapper key={chip}>
              <span>{chip.toUpperCase()}</span>
            </ChipWrapper>
          ))}
        </ChipContainer>
        <Title>{title}</Title>
        <Subtitle>{description}</Subtitle>
        <BuyBarContainer>
          <BuyPriceContainer>
            <span>R$</span> {formatedPrice}
          </BuyPriceContainer>
          <BuyControllsContainer>
            <SelectAmount
              amount={amount}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
            <CartButton />
          </BuyControllsContainer>
        </BuyBarContainer>
      </ContentWrapper>
    </ProductCardContainer>
  );
}

export { ProductCard };

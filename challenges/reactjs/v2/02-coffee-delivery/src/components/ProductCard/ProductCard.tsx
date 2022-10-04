import { ShoppingCart } from 'phosphor-react';
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
import { IProductsDTO } from '../../database/db-coffee';
import { useState } from 'react';

interface ProductCardProps {
  product: IProductsDTO;
}

const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'decimal',
  minimumFractionDigits: 2,
});

function ProductCard({ product }: ProductCardProps) {
  const [amount, setAmount] = useState<number>(0);

  const { image, type, title, description, price } = product;

  const formatedPrice = priceFormatter.format(price / 100);

  function handleAdd() {
    setAmount((state) => {
      return state + 1;
    });
  }

  function handleDecrease() {
    setAmount((state) => {
      return state - 1;
    });
  }

  return (
    <ProductCardContainer>
      <img src={image} />
      <ContentWrapper>
        <ChipContainer>
          {type.map((chip) => (
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
            <SelectAmount amount={amount} onAdd={handleAdd} onDecrease={handleDecrease} />
            <CartButton />
          </BuyControllsContainer>
        </BuyBarContainer>
      </ContentWrapper>
    </ProductCardContainer>
  );
}

export { ProductCard };

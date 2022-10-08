import { useContext, useEffect, useState } from 'react';
import { ProductCard } from '../../../../components/ProductCard';
import { OrderContext } from '../../../../contexts/OrderContext';
import { CardsContainer, ProductListContainer, TitleWrapper } from './styles';

function ProductList() {
  const { incrementCartProduct, decrementCartProduct, getProductAmount, products } =
    useContext(OrderContext);

  return (
    <ProductListContainer>
      <TitleWrapper>Nossos cafés</TitleWrapper>

      <CardsContainer>
        {products.map(
          (product) =>
            product.available && (
              <ProductCard
                key={product.id}
                product={product}
                amount={getProductAmount(product.id)}
                onIncrement={() => incrementCartProduct(product)}
                onDecrement={() => decrementCartProduct(product)}
              />
            ),
        )}
      </CardsContainer>
    </ProductListContainer>
  );
}

export { ProductList };

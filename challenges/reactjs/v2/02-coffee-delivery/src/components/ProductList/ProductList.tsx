import { useEffect, useState } from 'react';
import { coffees, IProductsDTO } from '../../database/db-coffee';
import { ProductCard } from '../ProductCard';
import { CardsContainer, ProductListContainer, TitleWrapper } from './styles';

function ProductList() {
  const [products, setProducts] = useState<IProductsDTO[]>([]);

  useEffect(() => {
    setProducts(coffees);
  }, []);

  return (
    <ProductListContainer>
      <TitleWrapper>Nossos cafés</TitleWrapper>

      <CardsContainer>
        {products.map(
          (product) =>
            product.available && <ProductCard key={product.id} product={product} />,
        )}
      </CardsContainer>
    </ProductListContainer>
  );
}

export { ProductList };

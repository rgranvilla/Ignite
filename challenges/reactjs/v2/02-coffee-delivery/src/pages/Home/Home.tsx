import { useContext, useEffect } from 'react';

import { OrderContext } from '../../contexts/OrderContext';
import { Intro } from './components/Intro';
import { ProductList } from './components/ProductList';

import { coffees } from '../../database/db-coffee';

import { HomeContainer } from './styles';

function Home() {
  const { loadProductsList } = useContext(OrderContext);
  useEffect(() => {
    loadProductsList(coffees);
  }, []);
  return (
    <HomeContainer>
      <Intro />
      <ProductList />
    </HomeContainer>
  );
}

export { Home };

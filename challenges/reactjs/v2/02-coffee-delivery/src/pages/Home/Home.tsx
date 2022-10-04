import { Intro } from '../../components/Intro';
import { ProductList } from '../../components/ProductList';
import { HomeContainer } from './styles';

function Home() {
  return (
    <HomeContainer>
      <Intro />
      <ProductList />
    </HomeContainer>
  );
}

export { Home };

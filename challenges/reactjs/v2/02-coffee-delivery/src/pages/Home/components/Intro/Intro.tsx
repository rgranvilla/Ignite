import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';

import {
  ImageCoverContainer,
  IntroContainer,
  IntroLeftContainer,
  MainTextContainer,
  Subtitle,
  TagIconWrapper,
  TagsContainer,
  TagWrapper,
  Title,
} from './styles';

import cover from '../../../../assets/coffee-delivery.png';

function Intro() {
  return (
    <IntroContainer>
      <IntroLeftContainer>
        <MainTextContainer>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </Subtitle>
        </MainTextContainer>
        <TagsContainer>
          <TagWrapper>
            <TagIconWrapper bgColor="yellowDark">
              <ShoppingCart size={16} weight="fill" />
            </TagIconWrapper>
            <span>Compra simples e segura</span>
          </TagWrapper>
          <TagWrapper>
            <TagIconWrapper bgColor="baseText">
              <Package size={16} weight="fill" />
            </TagIconWrapper>
            <span>Embalagem mantém o café intacto</span>
          </TagWrapper>
          <TagWrapper>
            <TagIconWrapper bgColor="yellow">
              <Timer size={16} weight="fill" />
            </TagIconWrapper>
            <span>Entrega rápida e rastreada</span>
          </TagWrapper>
          <TagWrapper>
            <TagIconWrapper bgColor="purple">
              <Coffee size={16} weight="fill" />
            </TagIconWrapper>
            <span>O café chega fresquinho até você</span>
          </TagWrapper>
        </TagsContainer>
      </IntroLeftContainer>
      <ImageCoverContainer>
        <img
          src={cover}
          alt={`Imagem composta por um copo descartavel de café com tampa, em 
          primeiro plano, com grãos de café soltos e espalhados no fundo junto 
          com equipamentos de maquina de café expresso sobre um fundo amarelo 
          ovo`}
        />
      </ImageCoverContainer>
    </IntroContainer>
  );
}

export { Intro };

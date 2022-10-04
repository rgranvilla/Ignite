import styled from 'styled-components';

export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;
`;

export const TitleWrapper = styled.div`
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  line-height: 130%;

  color: ${(props) => props.theme['base-subtitle']};
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

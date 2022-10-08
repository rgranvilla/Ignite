import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  height: 19.375rem;
  width: 16rem;
  position: relative;

  display: flex;
  justify-content: center;

  border-radius: 6px 36px 6px 36px;

  background: ${(props) => props.theme['base-card']};

  img {
    position: absolute;
    top: -20px;

    height: 7.5rem;
    width: 7.5rem;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChipContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ChipWrapper = styled.div`
  max-width: fit-content;
  white-space: nowrap;

  font-size: 0.625rem;
  font-weight: 700;
  line-height: 130%;

  padding: 0.25rem 0.5rem;

  border-radius: 9999px;

  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};
`;

export const Title = styled.h1`
  margin-top: 1rem;

  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;

  color: ${(props) => props.theme['base-subtitle']};
`;

export const Subtitle = styled.h3`
  margin-top: 0.5rem;
  padding: 0 1.25rem;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;

  text-align: center;

  color: ${(props) => props.theme['base-label']};
`;

export const BuyBarContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  padding: 0 1.25rem;

  display: flex;
  justify-content: space-between;
`;

export const BuyPriceContainer = styled.div`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 130%;
  text-align: right;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const BuyControllsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

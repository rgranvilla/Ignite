import styled from 'styled-components';

export const CartProductCardContainer = styled.div`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`;

export const CartProductCardContent = styled.div`
  height: 4rem;

  display: flex;
  justify-content: space-between;

  img {
    height: 4rem;
    object-fit: contain;
  }
`;

export const DescriptionContent = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const DescriptionRightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const DescriptionTitleContent = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 400;

  color: ${(props) => props.theme['base-subtitle']};
`;

export const DescriptionControllsButtons = styled.div`
  display: flex;
  gap: 0.5rem;

  white-space: nowrap;
`;

export const PriceContainer = styled.text`
  font-size: 1rem;
  font-weight: 700;
  text-align: right;

  color: ${(props) => props.theme['base-text']};
`;

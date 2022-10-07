import styled from 'styled-components';

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 5rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    font-size: 1.25rem;
    font-weight: 400;
    font-stretch: 100;
    color: ${(props) => props.theme['base-subtitle']};
  }

  img {
    margin-top: 6.25rem;
  }
`;

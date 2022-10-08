import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  nav {
    display: flex;
    gap: 0.75rem;
  }

  img {
    cursor: pointer;
    transition: opacity 0.2s;
  }

  img:hover {
    opacity: 0.7;
  }
`;

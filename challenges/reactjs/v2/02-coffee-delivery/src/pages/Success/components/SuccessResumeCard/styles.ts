import styled from 'styled-components';

export const ResumeCardContainer = styled.div`
  margin-top: 2.5rem;

  border: double 1px transparent;
  border-radius: 6px 36px;
  background-image: linear-gradient(white, white),
    linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const ResumeCardContent = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

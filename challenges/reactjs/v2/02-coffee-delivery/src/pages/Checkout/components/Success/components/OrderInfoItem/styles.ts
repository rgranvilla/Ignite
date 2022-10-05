import styled from 'styled-components';

export const OrderInfoContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const BG_COLORS = {
  purple: 'purple',
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
} as const;

interface BgProps {
  bgColor: keyof typeof BG_COLORS;
}

export const ImageWrapper = styled.div<BgProps>`
  height: 2rem;
  width: 2rem;

  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 999px;
  color: ${(props) => props.theme.background};
  background: ${(props) => props.theme[BG_COLORS[props.bgColor]]};
`;

export const DataContent = styled.span`
  color: ${(props) => props.theme['base-text']};
  font-weight: 400;
  font-size: 1rem;

  span {
    font-weight: 700;
  }
`;

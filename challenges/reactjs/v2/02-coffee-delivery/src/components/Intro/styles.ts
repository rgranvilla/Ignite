import styled from 'styled-components';

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 5.75rem 0;
`;

export const IntroLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`;

export const MainTextContainer = styled.div`
  max-width: 36.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 3rem;
  line-height: 130%;
`;

export const Subtitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 130%;
`;

export const TagsContainer = styled.div`
  max-width: 36.75rem;

  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem 2.5rem;

  white-space: nowrap;
`;

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  min-width: 14.5rem;

  span {
    color: ${(props) => props.theme['base-text']};
  }
`;

const BG_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple',
  baseText: 'base-text',
} as const;

interface BgColorProps {
  bgColor: keyof typeof BG_COLORS;
}

export const TagIconWrapper = styled.div<BgColorProps>`
  height: 2rem;
  width: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.background};

  border: 0;
  border-radius: 9999px;

  background: ${(props) => props.theme[BG_COLORS[props.bgColor]]};
`;

export const ImageCoverContainer = styled.div`
  height: 22.5rem;
`;

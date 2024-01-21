import styled, { keyframes } from 'styled-components';

const skeletonFade = keyframes`
    0%,
    100% {
      opacity: 0.4;
    }
  
    50% {
      opacity: 1;
    }
  }
  `;

export type SkeletonStyleProps = {
  height?: React.CSSProperties['height'];
  mx?: React.CSSProperties['margin'];
  my?: React.CSSProperties['margin'];
  radius?: React.CSSProperties['borderRadius'];
  width?: React.CSSProperties['width'];
};

export const SkeletonStyled = styled.div<SkeletonStyleProps>`
  background-color: ${({ theme }) => theme.colors.skeleton};
  border-radius: ${({ radius, theme }) =>
    radius ? radius : theme.borderRadius};
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || '100%'};
  animation: ${skeletonFade} 1.5s linear infinite;
  margin-top: ${({ my }) => my || '0'};
  margin-bottom: ${({ my }) => my || '0'};
  margin-left: ${({ mx }) => mx || '0'};
  margin-right: ${({ mx }) => mx || '0'};
`;

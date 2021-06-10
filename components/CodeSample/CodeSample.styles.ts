import styled from 'styled-components';

export const Pre = styled.pre`
  background: ${({ theme }) => theme.colors.ghostWhite};
  line-height: ${({ theme }) => theme.lineHeights[1]};
  padding: ${({ theme }) => theme.space[3]};
  border-radius: ${({ theme }) => theme.space[2]};
  overflow: auto;
`;

export const Line = styled.div`
  display: table-row;
`;

export const SpanLine = styled.span`
  color: ${({ theme }) => theme.colors.base} !important;
`;

export const CopyIcon = styled.span`
  transform: rotateY(180deg);
  position: absolute;
  opacity: 0;
  right: ${({ theme }) => theme.radii[2]};
  top: ${({ theme }) => theme.radii[2]};
  cursor: pointer;
`;

export const HighlightContainer = styled.div`
  position: relative;
  &:hover ${CopyIcon} {
    transition: 1s;
    opacity: 1;
  }
`;

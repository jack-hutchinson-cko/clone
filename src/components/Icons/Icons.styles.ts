import styled from 'styled-components';

export const StyledIcon = styled.svg<{ width: number; height: number; color?: string }>`
  fill: none;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  color: ${({ color, theme }) => color ?? theme.colors.stormGray};
`;

export const StyledIconIB = styled(StyledIcon)`
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledSocialIcon = styled(StyledIcon)`
  color: ${({ theme }) => theme.colors.white};
`;

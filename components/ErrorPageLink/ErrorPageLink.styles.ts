import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

export const StyledLink = styled.a`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 50px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.errorPageLinkBorder};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.errorPageLinkHover};
    box-shadow: ${({ theme }) => theme.shadows.light};
  }
`;

export const StyledReactSVG = styled(ReactSVG)`
  min-height: 60px;
  max-height: 70px;
  & > div {
    color: ${({ theme }) => theme.colors.baseLight};
  }
`;

export const StyledArrowIcon = styled(ReactSVG)`
  display: inline-block;
  margin-left: 10px;
`;

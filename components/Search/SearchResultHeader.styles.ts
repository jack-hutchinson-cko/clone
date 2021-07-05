import styled from 'styled-components';
import { TextHeadingOne } from 'components/TextHeading';

export const Header = styled(TextHeadingOne)`
  margin: 0 0 16px 0;
`;

export const Mark = styled.mark`
  color: ${({ theme }) => theme.colors.base};
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.textHighlight} 18%,
    transparent 2%
  ) !important;
`;

export const HeaderContainer = styled.div`
  margin: 0 16px 16px 16px;
  padding-bottom: 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyLight} !important;
`;

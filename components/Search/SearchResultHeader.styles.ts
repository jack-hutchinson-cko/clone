import styled from 'styled-components';
import { TextHeadingOne } from 'components/TextHeading';

export const Header = styled(TextHeadingOne)`
  margin: 0 0 16px 0;
  color: ${({ theme }) => theme.colors.successDark};
`;

export const Mark = styled.span`
  color: ${({ theme }) => theme.colors.successDark};
  position: relative;
  &::after {
    position: absolute;
    z-index: -1;
    content: '';
    bottom: 4px;
    left: 0;
    right: 0;
    height: 8px;
    background: ${({ theme }) => theme.colors.turquoise};
  }
`;

export const HeaderContainer = styled.div`
  margin: 0 16px 16px 16px;
  padding-bottom: 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyLight} !important;
`;

export const SearchStatusContainer = styled.div`
  color: ${({ theme }) => theme.colors.cometLight};
`;

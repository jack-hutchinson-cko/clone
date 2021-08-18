import styled from 'styled-components';
import { TextHeadingTwo } from 'components/TextHeading';

export const Header = styled(TextHeadingTwo)`
  margin: 0 0 16px 0;
  color: ${({ theme }) => theme.colors.base};
`;

export const Mark = styled.span`
  color: ${({ theme }) => theme.colors.base};
  position: relative;
  &::after {
    position: absolute;
    z-index: -1;
    content: '';
    bottom: 4px;
    left: 0;
    right: 0;
    height: 8px;
  }

  background: linear-gradient(to top, ${({ theme }) => theme.colors.underline} 18%, transparent 2%);
`;

export const HeaderContainer = styled.div`
  margin: 0 16px 16px 16px;
  padding-bottom: 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border} !important;
`;

export const SearchStatusContainer = styled.div`
  color: ${({ theme }) => theme.colors.cometLight};
`;

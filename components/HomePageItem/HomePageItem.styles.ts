import styled from 'styled-components';
import { spacing } from 'constants/spacingSize';

import { TextHeadingThree } from 'components/TextHeading';

export const Header = styled(TextHeadingThree)`
  margin: 0 0 ${spacing.s40}px 0;
`;

export const Body = styled.div`
  > p {
    margin-bottom: ${spacing.s40}px;
  }
`;

export const Wrapper = styled.div`
  > *:last-child {
    margin-bottom: 0px;
  }
`;

export const ArrowWrapper = styled.div`
  margin-bottom: ${spacing.s20}px;
`;

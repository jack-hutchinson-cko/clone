import { FC, ReactNode } from 'react';

import { Container, Navigation } from './NavigationTreeMenu.styles';

type Props = {
  isMobile?: boolean;
  topLinks?: ReactNode;
};

const NavigationTreeMenu: FC<Props> = ({ isMobile, children, topLinks, ...props }) => (
  <Container isMobile={isMobile} {...props}>
    {topLinks && <Navigation>{topLinks}</Navigation>}
    <Navigation>{children}</Navigation>
  </Container>
);

export default NavigationTreeMenu;

import { FC, ReactNode } from 'react';
import Link from 'next/link';

import { SectionItemWrapper, StyledLink } from './SectionItem.styles';

type Props = {
  isActive: boolean;
  href: string;
  children: ReactNode;
};

const SectionItem: FC<Props> = ({ isActive = false, href, children, ...props }) => {
  return (
    <SectionItemWrapper {...props}>
      <Link href={href} passHref>
        <StyledLink isActive={isActive}>{children}</StyledLink>
      </Link>
    </SectionItemWrapper>
  );
};

export default SectionItem;

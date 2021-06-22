import { FC } from 'react';

import { PoliciesList } from 'types/footer';
import FooterLink from '../../FooterLink';
import { SubFooterList, SubFooterListItem } from './SubFooter.styles';

type Props = {
  policies: PoliciesList;
  isMobile: boolean;
};

const SubFooterLinks: FC<Props> = ({ policies, isMobile }) => {
  return (
    <SubFooterList isMobile={isMobile}>
      {policies.map((sectionLink: { link: string; name: string }) => (
        <SubFooterListItem key={sectionLink.link + sectionLink.name}>
          <FooterLink href={sectionLink.link} underline external>
            {sectionLink.name}
          </FooterLink>
        </SubFooterListItem>
      ))}
    </SubFooterList>
  );
};

export default SubFooterLinks;

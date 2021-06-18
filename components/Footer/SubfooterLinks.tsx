import { FunctionComponent } from 'react';
import Link from 'next/link';
import footerList from '../../mocks/footerSection';
import {
  SubfooterGridItem,
  SubfooterTitle,
  SubfooterWrapper,
  SubfooterLink,
} from './Footer.styles';

const SubfooterLinksComponent: FunctionComponent = () => {
  return (
    <SubfooterGridItem>
      <SubfooterTitle>© 2021 Checkout.com</SubfooterTitle>
      <SubfooterWrapper>
        {footerList.policies.map((sectionLink: { link: string; name: string }) => (
          <SubfooterLink key={sectionLink.link + sectionLink.name}>
            <Link href={sectionLink.link}>
              <a href={sectionLink.link} target="_blank" rel="noreferrer">
                {sectionLink.name}
              </a>
            </Link>
          </SubfooterLink>
        ))}
      </SubfooterWrapper>
    </SubfooterGridItem>
  );
};

export default SubfooterLinksComponent;

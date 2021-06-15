import { FC } from 'react';
import footerList from '../../mocks/footerSection';
import { SubfooterSocialLinks, SubfooterLogo } from './Footer.styles';

export type SocialItemType = {
  link: string;
  title: string;
  Icon: FC;
};

const SubfooterSocialLinksComponent: FC = () => {
  return (
    <SubfooterSocialLinks>
      {footerList.social.map(({ link, title, Icon }: SocialItemType) => {
        return (
          <SubfooterLogo href={link} key={link} title={title} rel="noopener noreferrer">
            <Icon />
          </SubfooterLogo>
        );
      })}
    </SubfooterSocialLinks>
  );
};

export default SubfooterSocialLinksComponent;

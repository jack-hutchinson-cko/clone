import { FC } from 'react';

import {
  IconFacebook,
  IconTwitter,
  IconInstagram,
  IconYoutube,
  IconGlassdoor,
  IconCheckout,
  IconLinkedin,
} from 'src/components/Icons';

type Props = {
  iconName: string;
};

const FooterSocialIcon: FC<Props> = ({ iconName }) => {
  switch (iconName.toLowerCase()) {
    case 'facebook':
      return <IconFacebook />;

    case 'twitter':
      return <IconTwitter />;

    case 'instagram':
      return <IconInstagram />;

    case 'youtube':
      return <IconYoutube />;

    case 'glassdoor':
      return <IconGlassdoor />;

    case 'checkout':
      return <IconCheckout />;

    case 'linkedin':
      return <IconLinkedin />;

    default:
      return null;
  }
};

export default FooterSocialIcon;

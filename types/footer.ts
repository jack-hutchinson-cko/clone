type LinkEntity = {
  link: string;
  name: string;
};

type SocialLinkEntity = {
  link: string;
  title: string;
  iconName: string;
};

export type NavigationItemEntity = LinkEntity[];

type NavigationEntity = {
  navigationTitle: string;
  items: NavigationItemEntity[];
};

export type PoliciesList = LinkEntity[];

export type SocialList = SocialLinkEntity[];

export type NavigationList = NavigationEntity[];

export type FooterContent = {
  policies: PoliciesList;
  social: SocialList;
  navigation: NavigationList;
};

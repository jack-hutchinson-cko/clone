type LinkEntity = {
  link: string;
  name: string;
};

export enum PolicyEntityType {
  LINK = 1,
  BUTTON = 2,
}

export type PolicyEntity<T> = {
  type: PolicyEntityType;
  name: string;
} & T;

export type PolicyLink = { link: string };

export type PolicyButton = { props?: unknown };

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

export type PoliciesList = PolicyEntity<PolicyLink | PolicyButton>[];

export type SocialList = SocialLinkEntity[];

export type NavigationList = NavigationEntity[];

export type FooterContent = {
  policies: PoliciesList;
  social: SocialList;
  navigation: NavigationList;
};

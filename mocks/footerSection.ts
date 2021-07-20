import { NavigationList, PoliciesList, SocialList, PolicyEntityType } from 'types/footer';

export const policies: PoliciesList = [
  {
    type: PolicyEntityType.LINK,
    link: 'https://www.checkout.com/legal/terms-and-policies',
    name: 'Terms and policies',
  },
  {
    type: PolicyEntityType.LINK,
    link: 'https://www.checkout.com/legal/terms-and-policies',
    name: 'Privacy policy',
  },
  {
    type: PolicyEntityType.LINK,
    link: 'https://www.checkout.com/legal/terms-and-policies',
    name: 'Certificates',
  },
  {
    type: PolicyEntityType.BUTTON,
    name: 'Cookie Settings',
    props: {
      id: 'ot-sdk-btn',
      className: 'ot-sdk-show-settings settings-button'
    },
  },
  {
    type: PolicyEntityType.LINK,
    link: 'https://www.checkout.com/legal/terms-and-policies',
    name: 'Modern Slavery Statement',
  },
  {
    type: PolicyEntityType.LINK,
    link: 'https://www.checkout.com/legal/terms-and-policies',
    name: 'Supplier Code of Conduct',
  },
];

export const social: SocialList = [
  {
    link: 'https://www.facebook.com/checkout/',
    title: 'Checkout.com`s Facebook',
    iconName: 'facebook',
  },
  {
    link: 'https://twitter.com/checkout',
    title: 'Checkout.com`s Twitter',
    iconName: 'twitter',
  },
  {
    link: 'https://www.instagram.com/checkout_com/',
    title: 'Checkout.com`s Instagram',
    iconName: 'instagram',
  },
  {
    link: 'https://www.youtube.com/channel/UCC-VFhOEXmyaOekIOwZvxhg"',
    title: 'Checkout.com`s Youtube',
    iconName: 'youtube',
  },
  {
    link: 'https://www.glassdoor.co.uk/Overview/Working-at-Checkout-com-EI_IE837487.11,23.htm',
    title: 'Checkout.com`s Glassdoor',
    iconName: 'glassdoor',
  },
  {
    link: 'https://www.checkout.com/legal/terms-and-policies',
    title: 'heckout.com`s Blog',
    iconName: 'checkout',
  },
  {
    link: 'https://www.linkedin.com/company/checkout/',
    title: 'heckout.com`s LinkedIn',
    iconName: 'linkedin',
  },
];

export const navigation: NavigationList = [
  {
    navigationTitle: 'Solution',
    items: [
      [
        {
          link: 'https://www.checkout.com/legal/terms-and-policies',
          name: 'Solution overview',
        },
        {
          link: 'https://www.checkout.com/payment-integrations/unified-api',
          name: 'Unified payments platform',
        },
        {
          link: 'https://www.checkout.com/solutions/international-coverage',
          name: 'International coverage',
        },
        {
          link: 'https://www.checkout.com/data-and-reporting',
          name: 'Data and reporting',
        },
        {
          link: 'https://www.checkout.com/payment-integrations',
          name: 'Integrations',
        },
      ],
      [
        {
          link: 'https://www.checkout.com/solutions',
          name: 'Fraud Protection',
        },
        {
          link: 'https://www.checkout.com/solutions',
          name: 'Payment methods',
        },
        {
          link: 'https://www.checkout.com/solutions',
          name: 'Pricing',
        },
        {
          link: 'https://www.checkout.com/solutions',
          name: 'Partners',
        },
      ],
    ],
  },
  {
    navigationTitle: 'Company',
    items: [
      [
        {
          link: 'https://www.checkout.com/about-us',
          name: 'About us',
        },
        {
          link: 'https://www.checkout.com/careers',
          name: 'Careers',
        },
        {
          link: 'https://www.checkout.com/newsroom',
          name: 'Newsroom',
        },
        {
          link: 'https://www.checkout.com/contact-us',
          name: 'Contact us',
        },
        {
          link: 'https://www.checkout.com/partners/join',
          name: 'Become a partner',
        },
      ],
    ],
  },
  {
    navigationTitle: 'Insights',
    items: [
      [
        {
          link: 'https://www.checkout.com/blog',
          name: 'Blog',
        },
        {
          link: 'https://www.checkout.com/solutions',
          name: 'Customer stories',
        },
      ],
    ],
  },
  {
    navigationTitle: 'Integration',
    items: [
      [
        {
          link: 'https://www.checkout.com/solutions',
          name: 'Documentation',
        },
        {
          link: 'https://www.checkout.com/solutions',
          name: 'API Reference',
        },
        {
          link: 'https://www.checkout.com/solutions',
          name: 'Support',
        },
      ],
    ],
  },
];

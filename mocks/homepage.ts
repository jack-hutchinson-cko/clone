import { HomePageContent, HomePageBlockLinksData } from 'types/homepage'

const homePageBlockLinks: HomePageBlockLinksData = {
  payments: [
    {
      id: 1,
      name: 'Card payments',
      url: '/#1',
    },
    {
      id: 2,
      name: 'Card payouts',
      url: '/#2',
    },
    {
      id: 3,
      name: 'Payment methods',
      url: '/#3',
    },
  ],
  'the-hub': [
    {
      id: 1,
      name: 'At a glance',
      url: '/#4',
    },
    {
      id: 2,
      name: 'Manage payments',
      url: '/#5',
    },
    {
      id: 3,
      name: 'Generate reports',
      url: '/#6',
    },
  ],
}

export const homePageContent: HomePageContent = {
  intro: {
    title: 'Everything you need to know to give your customers a great online experience',
    description:
      'Accept web and mobile payments, defend against disputes and fraud, and monitor your transactions in real time.',
    getStartedUrl: '/#',
    imageUrl: '/assets/images/HeroImg.svg',
  },
  blocks: [
    {
      id: 1,
      title: 'Payments',
      description:
        'Accept online payments from cards, wallets and local payment methods, and pay out to cards.',
      imageUrl: '/assets/images/Payments.svg',
      links: homePageBlockLinks['payments'],
    },
    {
      id: 2,
      title: 'The hub',
      description:
        'View your key performance indicators, payment history and analytics—all in one place.',
      imageUrl: '/assets/images/Hub.svg',
      links: homePageBlockLinks['the-hub'],
    },
  ],
}

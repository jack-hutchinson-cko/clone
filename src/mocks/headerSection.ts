import { HeaderLink, SearchResultLink } from 'src/types/header';
import { IconSourceCode, IconChat, IconDocSearch } from 'src/components/Icons';
import { CLIENT_TYPE } from 'src/constants/clientSettings';

export const guidesListABC: HeaderLink[] = [
  {
    url: 'https://api-reference.checkout.com/',
    title: 'API Reference',
    description: 'Our reference library for integrating with our API',
    Icon: IconSourceCode,
  },
  {
    url: '/faq',
    title: 'FAQ',
    description: 'Find answers to our most frequently asked questions',
    Icon: IconChat,
  },
  {
    url: 'https://archive.docs.checkout.com/',
    title: 'Classic docs',
    description: 'Documentation for our Classic API',
    Icon: IconDocSearch,
  },
];

export const guidesListNAS: HeaderLink[] = [
  {
    url: 'https://api-reference.checkout.com/preview/crusoe',
    title: 'API Reference',
    description: 'Our reference library for integrating with our API',
    Icon: IconSourceCode,
  },
  {
    url: 'https://archive.docs.checkout.com/',
    title: 'Classic docs',
    description: 'Documentation for our Classic API',
    Icon: IconDocSearch,
  },
];

const guidesListByClientType = {
  ABC: guidesListABC,
  NAS: guidesListNAS,
};

export const guidesList = guidesListByClientType[CLIENT_TYPE as 'ABC' | 'NAS'] || [];

export const popularSearches: SearchResultLink[] = [
  { title: 'Payment', url: '/search?query=payment&page=1' },
  { title: 'Card verification ', url: '/search?query=card%20verfication&page=1' },
  { title: '3D secure', url: '/search?query=3d%20secure&page=1' },
];

export const popularSearchesTitle = 'Popular searches';

export const emptySearchResult = "We couldn't find a match. Please try another term.";

export const loginTitleByClientType = {
  ABC: 'The Hub',
  NAS: 'Dashboard',
};

export const loginTopUrlByClientType = {
  ABC: 'https://hub.checkout.com/login',
  NAS: 'https://dashboard.checkout.com/login',
};

export const loginBottomUrlByClientType = {
  ABC: 'https://sandbox.checkout.com/login',
  NAS: 'https://dashboard.sandbox.checkout.com/login',
};

export const testAccountUrl = 'https://www.checkout.com/get-test-account';

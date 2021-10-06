import { HeaderLink, SearchResultLink } from 'types/header';
import { IconSourceCode, IconChat, IconDocSearch } from 'components/Icons';
import { CLIENT_TYPE } from 'constants/clientSettings';

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
    url: 'https://api-reference.checkout.com/',
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
}

export const guidesList = guidesListByClientType[CLIENT_TYPE as 'ABC' | 'NAS'] || []

export const popularSearches: SearchResultLink[] = [
  { title: 'Payment', url: 'search?query=payment&page=1' },
  { title: 'Card verification ', url: '/search?query=card%20verfication&page=1' },
  { title: '3D secure', url: '/search?query=3d%20secure&page=1' },
];

export const popularSearchesTitle: string = 'Popular searches';

export const emptySearchResult: string = "We couldn't find a match. Please try another term.";

export const loginUrl: string = 'https://hub.checkout.com/login';

export const testAccountUrl: string = 'https://www.checkout.com/get-test-account';

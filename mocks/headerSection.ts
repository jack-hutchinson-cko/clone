import { HeaderLink, SearchResultLink } from 'types/header';
import { IconSourceCode, IconChat, IconDocSearch } from 'components/Icons/Icons';

export const guidesList: HeaderLink[] = [
  {
    url: '/api-refs',
    title: 'Api Reference',
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
    url: '/cdocs',
    title: 'Classic Docs',
    description: 'Documentation for our Classic API',
    Icon: IconDocSearch,
  },
];

export const popularSearches: SearchResultLink[] = [
  { title: 'Payment', url: '/payment' },
  { title: 'Card Verification ', url: '/card-v' },
  { title: '3D secure', url: '/3d-secure' },
];

export const popularSearchesTitle: string = 'Popular searches';

export const emptySearchResult: string = "We couldn't find a match. Please try another term.";

export const loginUrl: string = '/login';

export const testAccountUrl: string = '/get-test-account';

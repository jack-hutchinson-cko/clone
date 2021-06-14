import { FC } from 'react'

import { HeaderGuid } from 'types/header'
import {
  IconSourceCode,
  IconChat,
  IconDocSearch,
} from 'components/Icons/Icons';

export const guidesList: HeaderGuid[] = [
  {
    url: '/',
    title: 'Api Reference',
    description: 'Our reference library for integrating with our API',
    Icon: IconSourceCode,
  },
  {
    url: '/',
    title: 'FAQ',
    description: 'Find answers to our most frequently asked questions',
    Icon: IconChat,
  },
  {
    url: '/',
    title: 'Classic Docs',
    description: 'Documentation for our Classic API',
    Icon: IconDocSearch,
  },
]

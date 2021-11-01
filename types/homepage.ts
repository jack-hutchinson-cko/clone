import { MDXRemoteSerializeResult } from 'next-mdx-remote';

type HomePageBlockNames = 'payments' | 'the-hub';

type HomePageBlockLinks = {
  id: number;
  name: string;
  url: string;
};

export type HomePageBlockLinksData = {
  [key in HomePageBlockNames]: HomePageBlockLinks[];
};

export type HomePageContent = {
  source: MDXRemoteSerializeResult;
  title: string;
  description: string;
  getStartedLink: string;
};

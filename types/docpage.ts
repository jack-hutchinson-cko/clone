import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { BreadCrumbsItems } from 'types/content';
import { AnchorItem } from 'types/anchors';

export type DocPostProps = {
  breadCrumbsItem: BreadCrumbsItems;
  frontMatter: {
    title: string;
    modifiedDate: string;
    lastAuthor: string;
    timeToComplete?: string;
    warningMessage?: string;
  };
  source: MDXRemoteSerializeResult;
  anchorsNavItems: AnchorItem[];
  childrenArticles: { title: string; href: string; description: string }[];
  isIntegrationBuilder: boolean;
  showAuthorSection: boolean;
};

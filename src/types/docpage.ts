import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { BreadCrumbsItems } from 'src/types/content';
import { AnchorItem } from 'src/types/anchors';

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

import { FC } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import ButtonLink from 'components/ButtonLink';
import ContentPanel from 'components/ContantPanel';
import { withAnchor } from 'components/AnchorsProvider';
import withBlockMargin from 'hoc/withBlockMargin';
import {
  TextHeadingOne,
  TextHeadingTwo,
  TextHeadingThree,
  TextHeadingFour,
} from 'components/TextHeading';
import TipBox from 'components/TipBox';
import Tabs, { Tab } from 'components/Tabs';
import { Text } from 'components/Text';
import { MDXCodeSample } from 'components/CodeSample';
import LineCode from 'components/LineCode';
import TextLink from 'components/TextLink';
import Box from 'components/Box';
import Pre from 'components/Pre';
import { RequestTag, StatusTag, TypeTag } from 'components/Tag';
import InfoBox from 'components/InfoBox';
import LineCodeWrapper from 'components/LineCodeWrapper';
import Accordion, { AccordionHead, AccordionBody } from 'components/Accordion';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableHeadSticky,
  TableRow,
  StyledTH,
} from 'components/Table';
import ImageBox from 'components/ImageBox';
import { ListItem, List, OrderedList, UnorderedList } from 'components/List';
import Iframe from 'components/Iframe';

export const mdxComponents = {
  TipBox: withBlockMargin(TipBox),
  tabs: withBlockMargin(Tabs),
  tab: Tab,
  TableBody,
  TableCell,
  TableHead,
  TableHeadSticky,
  TableRow,
  Table: withBlockMargin(Table),
  table: withBlockMargin(Table),
  tbody: TableBody,
  tr: TableRow,
  th: StyledTH,
  td: TableCell,
  code: MDXCodeSample,
  LineCodeWrapper,
  h1: withAnchor(TextHeadingOne),
  h2: withAnchor(TextHeadingTwo),
  h3: TextHeadingThree,
  h4: TextHeadingFour,
  p: Text,
  inlineCode: LineCode,
  a: TextLink,
  Box,
  pre: Pre,
  RequestTag,
  StatusTag,
  TypeTag,
  InfoBox,
  ul: withBlockMargin(UnorderedList),
  ol: withBlockMargin(OrderedList),
  li: ListItem,
  UnorderedList: withBlockMargin(UnorderedList),
  OrderedList: withBlockMargin(OrderedList),
  ListItem,
  List: withBlockMargin(List),
  Accordion,
  AccordionHead,
  AccordionBody,
  img: withBlockMargin(ImageBox),
  Iframe: withBlockMargin(Iframe),
  ButtonLink,
  ContentPanel,
};

type Props = {
  source: MDXRemoteSerializeResult;
};

const MDXProvider: FC<Props> = ({ source }) => <MDXRemote {...source} components={mdxComponents} />;

export default MDXProvider;

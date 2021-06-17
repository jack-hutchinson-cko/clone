import { FC } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import withAnchor from 'hoc/withAnchor';
import withBlockMargin from 'hoc/withBlockMargin';
import { TextHeadingOne, TextHeadingTwo, TextHeadingThree } from 'components/TextHeading';
import TipBox from 'components/TipBox';
import Tabs, { TabBody, TabHead, TabRow } from 'components/Tabs';
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
} from 'components/Table';
import { ListItem, List, OrderedList, UnorderedList } from 'components/List';

const components = {
  TipBox: withBlockMargin(TipBox),
  TabBody,
  TabHead,
  TabRow,
  Tabs: withBlockMargin(Tabs),
  TableBody,
  TableCell,
  TableHead,
  TableHeadSticky,
  TableRow,
  Table: withBlockMargin(Table),
  code: MDXCodeSample,
  LineCodeWrapper,
  h1: withAnchor(TextHeadingOne),
  h2: withAnchor(TextHeadingTwo),
  h3: withAnchor(TextHeadingThree),
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
};

type Props = {
  source: MDXRemoteSerializeResult;
};

const MDXProvider: FC<Props> = ({ source }) => <MDXRemote {...source} components={components} />;

export default MDXProvider;

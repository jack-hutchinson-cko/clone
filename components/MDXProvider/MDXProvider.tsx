import { FC, useEffect, useState } from 'react';
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
import { RequestTag, StatusTag, TypeTag, SectionTag } from 'components/Tag';
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
  TableSubhead,
  TableTicCell,
} from 'components/Table';
import ImageBox from 'components/ImageBox';
import {
  ListItem,
  ListIconItem,
  ListNumberItem,
  List,
  OrderedList,
  UnorderedList,
} from 'components/List';
import Iframe from 'components/Iframe';
import Card from 'components/Card';
import CardLink from 'components/CardLink';
import CardWrapper from 'components/CardWrapper';
import Tic from 'components/Tic';
import SectionLink from 'components/SectionLink';
import { CategoriesList, CategoriesItem } from 'components/Categories';
import TwoColumn from 'components/TwoColumn';
import ArrowLink from 'components/ArrowLink';

export const mdxComponents = {
  TipBox: withBlockMargin(TipBox),
  tabs: withBlockMargin(Tabs),
  tab: Tab,
  TableBody,
  TableCell,
  TableTicCell,
  TableHead,
  TableHeadSticky,
  TableRow,
  TableSubhead,
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
  h3: withAnchor(TextHeadingThree, { silentMode: true }),
  h4: withAnchor(TextHeadingFour, { silentMode: true }),
  h5: withAnchor(TextHeadingThree, { silentMode: true }),
  h6: withAnchor(TextHeadingFour, { silentMode: true }),
  p: Text,
  inlineCode: LineCode,
  a: TextLink,
  Box,
  pre: Pre,
  RequestTag,
  StatusTag,
  TypeTag,
  SectionTag,
  InfoBox,
  List: withBlockMargin(List),
  ListIconItem,
  ListNumberItem,
  ul: withBlockMargin(UnorderedList),
  ol: withBlockMargin(OrderedList),
  li: ListItem,
  UnorderedList: withBlockMargin(UnorderedList),
  OrderedList: withBlockMargin(OrderedList),
  ListItem,
  Accordion,
  AccordionHead,
  AccordionBody,
  img: withBlockMargin(ImageBox),
  Iframe: withBlockMargin(Iframe),
  ButtonLink: withBlockMargin(ButtonLink),
  ButtonLinkSecondary: ButtonLink,
  ContentPanel: withBlockMargin(ContentPanel),
  Card,
  CardLink,
  CardWrapper: withBlockMargin(CardWrapper),
  Tic: withBlockMargin(Tic),
  SectionLink: withBlockMargin(SectionLink),
  CategoriesList: withBlockMargin(CategoriesList),
  CategoriesItem,
  TwoColumn: withBlockMargin(TwoColumn),
  ArrowLink,
};

type Props = {
  source: MDXRemoteSerializeResult;
};

const MDXProvider: FC<Props> = ({ source }) => {
  // because of bug in MDXRemote
  const [key, setKey] = useState(1);

  useEffect(() => {
    setKey(2);
  }, []);

  return <MDXRemote key={key} {...source} components={mdxComponents} />;
};

export default MDXProvider;

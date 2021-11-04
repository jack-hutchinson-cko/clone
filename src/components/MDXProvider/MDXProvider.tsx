import { FC, useEffect, useState } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import MDX from '@mdx-js/runtime';
import { themes } from 'src/constants/themes';

import FAQItem from 'src/components/FAQItem';
import ButtonLink from 'src/components/ButtonLink';
import ContentPanel from 'src/components/ContentPanel';
import { withAnchor } from 'src/components/AnchorsProvider';
import withBlockBottomMargin from 'src/hoc/withBlockBottomMargin';
import withStaticTheme from 'src/hoc/withStaticTheme';
import withYOverflow from 'src/hoc/withYOverflow';
import {
  MdxTextHeadingOne,
  MdxTextHeadingTwo,
  MdxTextHeadingThree,
  MdxTextHeadingFour,
  MdxTextHeadingFive,
} from 'src/components/TextHeading';
import TextWrapper from 'src/components/TextWrapper';
import TipBox from 'src/components/TipBox';
import Tabs, { Tab } from 'src/components/Tabs';
import { MDXText } from 'src/components/Text';
import { MDXCodeSample } from 'src/components/CodeSample';
import LineCode from 'src/components/LineCode';
import TextLink, { ExternalLink } from 'src/components/TextLink';
import Video from 'src/components/Video';
import Box from 'src/components/Box';
import Pre from 'src/components/Pre';
import { RequestTag, StatusTag, TypeTag, SectionTag } from 'src/components/Tag';
import InfoBox from 'src/components/InfoBox';
import LineCodeWrapper from 'src/components/LineCodeWrapper';
import { MDXAccordion } from 'src/components/Accordion';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableHeadSticky,
  TableRow,
  StyledTH,
  TableSubhead,
  TableTicCell,
} from 'src/components/Table';
import ImageBox from 'src/components/ImageBox';
import {
  ListItem,
  ListIconItem,
  ListNumberItem,
  List,
  OrderedList,
  UnorderedList,
} from 'src/components/List';
import Iframe from 'src/components/Iframe';
import Card from 'src/components/Card';
import CardLink from 'src/components/CardLink';
import CardWrapper from 'src/components/CardWrapper';
import Tic from 'src/components/Tic';
import SectionLink from 'src/components/SectionLink';
import { CategoriesList, CategoriesItem } from 'src/components/Categories';
import TwoColumn from 'src/components/TwoColumn';
import ArrowLink from 'src/components/ArrowLink';
import {
  IBuilder,
  IBuilderHeader,
  IBuilderFrameWorks,
  IBuilderFrameworkTab,
  IBuilderStep,
  IBuilderDescriptionCard,
  IBuilderCodeTab,
  IBuilderCodePreview,
  IBuilderFormPreview,
  IBuilderCodeControl,
} from 'src/components/IBuilder';
import FAQSectionLabel from 'src/components/FAQSectionLabel';
import { Highlight } from 'src/components/Highlight';
import CountryCardLink from 'src/components/CountryCardLink/CountryCardLink';
import { IndividualPayment, CorporatePayment } from 'src/components/Icons';
import Select, { Option } from 'src/components/Select';
import { spacing } from 'src/constants/spacingSize';
import HomePageItem from 'src/components/HomePageItem';
import HR from 'src/components/HR';
import { Wrapper } from './MDXProvider.styles';

export const mdxComponents = {
  TipBox: withBlockBottomMargin(TipBox),
  tabs: withBlockBottomMargin(Tabs),
  tab: Tab,
  TableBody,
  TableCell,
  TableTicCell,
  TableHead,
  TableHeadSticky,
  TableRow,
  TableSubhead,
  Table: withBlockBottomMargin(withYOverflow(Table)),
  table: withBlockBottomMargin(withYOverflow(Table)),
  tbody: TableBody,
  tr: TableRow,
  th: StyledTH,
  td: TableCell,
  code: withBlockBottomMargin(MDXCodeSample),
  LineCodeWrapper: withBlockBottomMargin(LineCodeWrapper),
  h1: withAnchor(MdxTextHeadingOne),
  h2: withAnchor(MdxTextHeadingTwo),
  h3: withAnchor(MdxTextHeadingThree),
  h4: withAnchor(MdxTextHeadingFour, { silentMode: true }),
  h5: withAnchor(MdxTextHeadingFive, { silentMode: true }),
  p: MDXText,
  inlineCode: LineCode,
  a: TextLink,
  ExternalLink,
  Video,
  TextLink,
  Box,
  pre: Pre,
  RequestTag,
  StatusTag,
  TypeTag,
  SectionTag,
  InfoBox,
  TextWrapper,
  List: withBlockBottomMargin(List, { spacing: spacing.s60 }),
  ListIconItem,
  ListNumberItem,
  ul: withBlockBottomMargin(UnorderedList, { spacing: spacing.s50 }),
  ol: withBlockBottomMargin(OrderedList, { spacing: spacing.s50 }),
  li: ListItem,
  UnorderedList: withBlockBottomMargin(UnorderedList),
  OrderedList: withBlockBottomMargin(OrderedList),
  ListItem,
  Accordion: withBlockBottomMargin(MDXAccordion, { spacing: spacing.s50 }),
  img: withBlockBottomMargin(ImageBox),
  Iframe: withBlockBottomMargin(Iframe),
  ButtonLink: withBlockBottomMargin(ButtonLink),
  ButtonLinkSecondary: ButtonLink,
  ContentPanel: withBlockBottomMargin(ContentPanel),
  Card,
  CardLink,
  CardWrapper: withBlockBottomMargin(CardWrapper),
  Tic: withBlockBottomMargin(Tic),
  SectionLink: withBlockBottomMargin(SectionLink),
  CategoriesList: withBlockBottomMargin(CategoriesList),
  CategoriesItem,
  TwoColumn: withBlockBottomMargin(TwoColumn),
  ArrowLink,
  IBuilder,
  IBuilderHeader,
  IBuilderFrameWorks,
  IBuilderFrameworkTab,
  IBuilderStep,
  IBuilderDescriptionCard,
  IBuilderCodeTab: withStaticTheme(IBuilderCodeTab, themes.dark),
  IBuilderCodePreview,
  IBuilderFormPreview,
  FAQItem,
  FAQSectionLabel,
  'ais-highlight-0000000000': Highlight,
  CountryCardLink,
  IndividualPayment,
  CorporatePayment,
  IBuilderCodeControl,
  Select: withBlockBottomMargin(Select),
  Option,
  HomePageItem,
  hr: HR,
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

  return (
    <Wrapper>
      <MDXRemote key={key} {...source} components={mdxComponents} />
    </Wrapper>
  );
};

export const MDXRuntime: FC = ({ children }) => <MDX components={mdxComponents}>{children}</MDX>;

export default MDXProvider;

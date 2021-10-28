import { FC, useEffect, useState } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import MDX from '@mdx-js/runtime';
import { themes } from 'constants/themes';

import FAQItem from 'components/FAQItem';
import ButtonLink from 'components/ButtonLink';
import ContentPanel from 'components/ContentPanel';
import { withAnchor } from 'components/AnchorsProvider';
import withBlockBottomMargin from 'hoc/withBlockBottomMargin';
import withStaticTheme from 'hoc/withStaticTheme';
import withYOverflow from 'hoc/withYOverflow';
import {
  MdxTextHeadingOne,
  MdxTextHeadingTwo,
  MdxTextHeadingThree,
  MdxTextHeadingFour,
  MdxTextHeadingFive,
} from 'components/TextHeading';
import TextWrapper from 'components/TextWrapper';
import TipBox from 'components/TipBox';
import Tabs, { Tab } from 'components/Tabs';
import { MDXText } from 'components/Text';
import { MDXCodeSample } from 'components/CodeSample';
import LineCode from 'components/LineCode';
import TextLink, { ExternalLink } from 'components/TextLink';
import Video from 'components/Video';
import Box from 'components/Box';
import Pre from 'components/Pre';
import { RequestTag, StatusTag, TypeTag, SectionTag } from 'components/Tag';
import InfoBox from 'components/InfoBox';
import LineCodeWrapper from 'components/LineCodeWrapper';
import { MDXAccordion } from 'components/Accordion';
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
} from 'components/IBuilder';
import FAQSectionLabel from 'components/FAQSectionLabel';
import { Highlight } from 'components/Highlight';
import CountryCardLink from 'components/CountryCardLink/CountryCardLink';
import { IndividualPayment, CorporatePayment } from 'components/Icons';
import Select, { Option } from 'components/Select';
import { spacing } from 'constants/spacingSize';
import HomePageItem from 'components/HomePageItem';
import HR from 'components/HR';
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

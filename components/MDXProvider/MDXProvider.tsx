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

const components = {
  TipBox: withBlockMargin(TipBox),
  TabBody,
  TabHead,
  TabRow,
  Tabs: withBlockMargin(Tabs),
  code: MDXCodeSample,
  h1: withAnchor(TextHeadingOne),
  h2: withAnchor(TextHeadingTwo),
  h3: withAnchor(TextHeadingThree),
  p: Text,
  inlineCode: LineCode,
  a: TextLink,
  Box,
  pre: Pre,
};

type Props = {
  source: MDXRemoteSerializeResult;
};

const MDXProvider: FC<Props> = ({ source }) => <MDXRemote {...source} components={components} />;

export default MDXProvider;

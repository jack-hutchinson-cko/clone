import { get } from 'lodash';
import { FC } from 'react';
import { truncateHighlighterResult } from 'lib/search';
import { HighlightedHeader, HighlightedBody } from './Highlighted.styles';

const tabsMap = {
  '<ais-highlight-0000000000>': '<em>',
  '</ais-highlight-0000000000>': '</em>',
};

const replacedTags = /<(\/a|a)is-highlight-0000000000>/g;

const TagToTypeMap = {
  header: HighlightedHeader,
  body: HighlightedBody,
};

type Props = {
  type: 'header' | 'body';
  value: string;
  withTruncate?: boolean;
  maxWordsCount?: number;
  mode: 'header' | 'page';
};

const Highlighted: FC<Props> = ({ value, type, withTruncate, maxWordsCount, mode }) => {
  const resultValue =
    withTruncate && maxWordsCount ? truncateHighlighterResult(value, maxWordsCount) : value;
  const preparedValue = resultValue.replace(replacedTags, (entity: string) => get(tabsMap, entity));

  const Component = TagToTypeMap[type];
  return <Component dangerouslySetInnerHTML={{ __html: preparedValue }} mode={mode} />;
};

export default Highlighted;

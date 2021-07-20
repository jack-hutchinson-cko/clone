/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { connectHighlight } from 'react-instantsearch-dom';
import { HighlightedBody, HighlightedHeader } from './Snippet.styles';
import { HitType } from './types';

const TagToTypeMap = {
  header: HighlightedHeader,
  body: HighlightedBody,
};

type Props = {
  attribute: string;
  type: 'header' | 'body';
  mode: 'header' | 'page';
  highlight: (data: { highlightProperty: string; attribute: string; hit: HitType }) => {
    value: string;
    isHighlighted: boolean;
  }[];
  hit: HitType;
};

const Snippet: FC<Props> = ({ highlight, attribute, hit, type, mode }) => {
  const parsedHit = highlight({
    highlightProperty: '_snippetResult',
    attribute,
    hit,
  });

  const Component = TagToTypeMap[type];

  return (
    <Component mode={mode}>
      {parsedHit.map((part, index) =>
        part.isHighlighted ? (
          <em key={index}>{part.value}</em>
        ) : (
          <span key={index}>{part.value}</span>
        ),
      )}
    </Component>
  );
};

export default connectHighlight(Snippet);

/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { connectHighlight } from 'react-instantsearch-dom';

import { Highlight } from 'src/components/Highlight';
import { HitMode, HitType } from 'src/types/search';
import { HighlightedBody, HighlightedHeader } from './Snippet.styles';

const TagToTypeMap = {
  header: HighlightedHeader,
  body: HighlightedBody,
};

type Props = {
  attribute: string;
  type: 'header' | 'body';
  mode: HitMode;
  highlight: (data: { highlightProperty: string; attribute: string; hit: HitType }) => {
    value: string;
    isHighlighted: boolean;
  }[];
  hit: HitType;
};

const Snippet: FC<Props> = ({ highlight, attribute, hit, type, mode }) => {
  const parsedHit = highlight({
    highlightProperty: attribute !== 'mdxBody' ? '_snippetResult' : '_highlightResult',
    attribute,
    hit,
  });

  const Component = TagToTypeMap[type];

  return (
    <Component mode={mode}>
      {parsedHit.map((part, index) =>
        part.isHighlighted ? (
          <Highlight key={index}>{part.value}</Highlight>
        ) : (
          <span key={index}>{part.value}</span>
        ),
      )}
    </Component>
  );
};

export default connectHighlight(Snippet);

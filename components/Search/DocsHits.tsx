import { FC } from 'react';
import Link from 'next/link';
import { connectHits } from 'react-instantsearch-dom';
import { get } from 'lodash';
import SearchBreadCrumbs from './SearchBreadCrumbs';
import Highlighted from './Highlighted';
import { Section, HitsContainer } from './DocsHits.styles';

type DocsHintProps = {
  hit: { objectID: string; _highlightResult: never };
  mode: 'header' | 'page';
  onClickHit?: () => void;
};

const Hit: FC<DocsHintProps> = ({ hit, mode, onClickHit }) => {
  const maxWordsCount = mode === 'header' ? 15 : 30;

  return (
    <Link href={get(hit, 'path', '')}>
      <Section mode={mode} onClick={onClickHit}>
        <Highlighted
          mode={mode}
          value={get(hit, '_highlightResult.title.value', '')}
          type="header"
        />
        {mode === 'header' ? null : (
          <SearchBreadCrumbs parentArticles={get(hit, 'parentArticles', [])} />
        )}
        <Highlighted
          mode={mode}
          value={get(hit, '_highlightResult.body.value', '')}
          type="body"
          withTruncate
          maxWordsCount={maxWordsCount}
        />
      </Section>
    </Link>
  );
};

type DocsHintsProps = {
  hits: { objectID: string; _highlightResult: never }[];
  maxHeight?: number;
  maxHitsNumber?: number;
  NoDataComponent?: FC;
  mode: 'header' | 'page';
  onClickHit?: () => void;
};

const DocsHits: FC<DocsHintsProps> = ({
  hits,
  maxHeight,
  maxHitsNumber,
  NoDataComponent,
  children,
  mode,
  onClickHit,
}) => {
  const resultHits = maxHitsNumber ? hits.slice(0, maxHitsNumber) : hits;

  return (
    <>
      <HitsContainer maxHeight={maxHeight}>
        {resultHits.map((hit) => (
          <Hit key={hit.objectID} hit={hit} mode={mode} onClickHit={onClickHit} />
        ))}
        {!resultHits.length && NoDataComponent ? <NoDataComponent /> : null}
      </HitsContainer>
      {children}
    </>
  );
};

DocsHits.defaultProps = {
  mode: 'page',
};

export default connectHits(DocsHits);

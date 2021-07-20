import { FC } from 'react';
import Link from 'next/link';
import { connectHits } from 'react-instantsearch-dom';
import { get } from 'lodash';
import SearchBreadCrumbs from './SearchBreadCrumbs';
import Snippet from './Snippet';
import { HitsContainer, HeadSection, PageSection, NoDataWrapper } from './DocsHits.styles';
import { HitType } from './types';

type DocsHintProps = {
  hit: HitType;
  mode: 'header' | 'page';
  onClickHit?: () => void;
};

const Hit: FC<DocsHintProps> = ({ hit, mode, onClickHit }) => {
  const Section = mode === 'header' ? HeadSection : PageSection;

  return (
    <Link href={get(hit, 'path', '')}>
      <Section onClick={onClickHit}>
        <Snippet hit={hit} attribute="title" mode={mode} type="header" />
        {mode === 'header' ? null : (
          <SearchBreadCrumbs parentArticles={get(hit, 'parentArticles', [])} />
        )}
        <Snippet
          hit={hit}
          attribute={mode === 'header' ? 'headBody' : 'body'}
          mode={mode}
          type="body"
        />
      </Section>
    </Link>
  );
};

type DocsHintsProps = {
  hits: HitType[];
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
        {!resultHits.length ? (
          <NoDataWrapper mode={mode}>
            No results found. Please try searching for something else.
          </NoDataWrapper>
        ) : null}
      </HitsContainer>
      {children}
    </>
  );
};

DocsHits.defaultProps = {
  mode: 'page',
};

export default connectHits(DocsHits);

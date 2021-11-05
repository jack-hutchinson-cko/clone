import { FC } from 'react';
import Link from 'next/link';
import { connectHits } from 'react-instantsearch-dom';
import { get } from 'lodash';

import { HitMode, HitType } from 'src/types/search';
import SearchBreadCrumbs from './SearchBreadCrumbs';
import Snippet from './Snippet';
import { HitsContainer, HeadSection, PageSection, NoDataWrapper } from './Hits.styles';

type DocsHintProps = {
  hit: HitType;
  mode: HitMode;
  onClickHit?: () => void;
};

const Hit: FC<DocsHintProps> = ({ hit, mode = HitMode.PAGE, onClickHit }) => {
  const Section = mode === HitMode.HEADER ? HeadSection : PageSection;

  return (
    <Link href={get(hit, 'path', '')}>
      <Section onClick={onClickHit}>
        <Snippet hit={hit} attribute="title" mode={mode} type="header" />
        {mode === HitMode.HEADER ? null : (
          <SearchBreadCrumbs parentArticles={get(hit, 'parentArticles', [])} />
        )}
        <Snippet
          hit={hit}
          attribute={mode === HitMode.HEADER ? 'headBody' : 'body'}
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
  mode: HitMode;
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

export default connectHits(DocsHits);

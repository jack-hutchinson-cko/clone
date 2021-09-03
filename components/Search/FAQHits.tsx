import React, { FC, Fragment } from 'react';
import Link from 'next/link';
import { connectHits } from 'react-instantsearch-dom';
import { get } from 'lodash';

import FAQItem from 'components/FAQItem';
import { MDXRuntime } from 'components/MDXProvider';
import { HitType, HitMode } from 'types/search';
import Snippet from './Snippet';
import { HitSection, HitsContainer, HeadSection, PageSection, NoDataWrapper } from './Hits.styles';

type FAQHintProps = {
  isLastOne: boolean;
  isExpanded: boolean;
  hit: HitType;
  mode: HitMode;
  queryLink?: string;
  onClickHit?: () => void;
};

const Hit: FC<FAQHintProps> = ({
  hit,
  mode,
  onClickHit,
  queryLink = '',
  isLastOne = false,
  isExpanded = false,
}) => {
  const Section = mode === HitMode.HEADER ? HeadSection : PageSection;

  if (mode === HitMode.HEADER) {
    return (
      <Link href={queryLink}>
        <Section onClick={onClickHit} isFAQSection>
          <Snippet hit={hit} attribute="title" mode={HitMode.HEADER} type="header" />
          <Snippet hit={hit} attribute="body" mode={HitMode.HEADER} type="body" />
        </Section>
      </Link>
    );
  }

  return (
    <Section isFAQSection>
      <FAQItem
        title={<Snippet hit={hit} attribute="title" mode={HitMode.HEADER} type="header" />}
        isExpanded={isExpanded}
        withHorizontal={!isLastOne}
      >
        <MDXRuntime>{get(hit, '_highlightResult.mdxBody.value')}</MDXRuntime>
      </FAQItem>
    </Section>
  );
};

type FAQHintsProps = {
  hits: HitType[];
  maxHeight?: number;
  maxHitsNumber?: number;
  NoDataComponent?: FC;
  mode: HitMode;
  itemId?: string | null;
  queryLink?: string;
  onClickHit?: () => void;
};

const FAQHits: FC<FAQHintsProps> = ({
  hits,
  maxHeight,
  maxHitsNumber,
  children,
  mode = HitMode.PAGE,
  itemId = null,
  queryLink = '',
  onClickHit,
}) => {
  const resultHits = maxHitsNumber ? hits.slice(0, maxHitsNumber) : hits;
  let prevFAQSection: string | null = null;

  const hitItems = resultHits.reduce((arr: JSX.Element[], hit, index) => {
    const faqSection = get(hit, 'faqSection');
    const nextItem = resultHits[index + 1];
    const isLastOfSection = !!nextItem && get(nextItem, 'faqSection') !== faqSection;
    const isSelectedItem = hit.objectID === itemId;
    const isExpanded = isSelectedItem || !itemId;

    const hitItem = (
      <Fragment key={hit.objectID}>
        {(faqSection !== prevFAQSection || isSelectedItem) && <HitSection>{faqSection}</HitSection>}
        <Hit
          isLastOne={!nextItem || isLastOfSection}
          isExpanded={isExpanded}
          hit={hit}
          mode={mode}
          onClickHit={onClickHit}
          queryLink={`${queryLink}&item=${hit.objectID}`}
        />
      </Fragment>
    );
    prevFAQSection = faqSection;

    if (isSelectedItem) {
      arr.unshift(hitItem);
      return arr;
    }

    arr.push(hitItem);
    return arr;
  }, []);

  return (
    <>
      <HitsContainer maxHeight={maxHeight}>
        {hitItems}
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

export default connectHits(FAQHits);

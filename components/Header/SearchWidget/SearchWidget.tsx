import { FC, useState, useCallback, useEffect } from 'react';
import { useMatchMedia } from '@cko/primitives';
import Link from 'next/link';

import useDebouncedState from 'hooks/useDebouncedState';
import { IconActionArrowRight } from 'components/Icons';
import Outside from 'components/Outside';
import { SearchResultLink } from 'types/header';
import { Breakpoints } from 'constants/screen';
import {
  TextField,
  TextFieldHolder,
  TextFieldWrapper,
  Results,
  SearchActionIcon,
  EmptySearchResult,
  PopularSearches,
  PopularSearchesTitle,
  PopularSearchesItem,
} from './SearchWidget.styles';

type Props = {
  isMobile?: boolean;
  popularSearches: SearchResultLink[];
  emptySearchResult: string;
  popularSearchesTitle: string;
};

const SearchWidget: FC<Props> = ({ popularSearches, emptySearchResult, popularSearchesTitle }) => {
  const isMobile = useMatchMedia(Breakpoints.MOBILE);
  const [value, setValue] = useState<string>('');
  const [query, setQuery] = useDebouncedState<string>(value);
  const [showResults, setShowResults] = useState<boolean>(false);

  const onInputHandler = useCallback(({ target }) => {
    setValue(target.value);
    setShowResults(false);
    setQuery(target.value);
    // eslint-disable-next-line
  }, []);

  const onClickOutside = useCallback(() => {
    if (showResults) setShowResults(false);
  }, [showResults]);

  useEffect(() => {
    if (query) setShowResults(true);
  }, [query]);

  return (
    <Outside onOutsideClick={onClickOutside}>
      {(refToElement) => (
        <TextFieldWrapper ref={refToElement} isMobile={isMobile}>
          <TextFieldHolder>
            <TextField value={value} onInput={onInputHandler} placeholder="Search" />
            <SearchActionIcon />
          </TextFieldHolder>
          <Results isShown={isMobile || showResults}>
            <EmptySearchResult>{emptySearchResult}</EmptySearchResult>
            <PopularSearches>
              <PopularSearchesTitle>{popularSearchesTitle}</PopularSearchesTitle>
              {popularSearches.map(({ title, url }) => (
                <Link key={title} href={url} passHref>
                  <PopularSearchesItem target="_blank">
                    {title} <IconActionArrowRight />
                  </PopularSearchesItem>
                </Link>
              ))}
            </PopularSearches>
          </Results>
        </TextFieldWrapper>
      )}
    </Outside>
  );
};

export default SearchWidget;

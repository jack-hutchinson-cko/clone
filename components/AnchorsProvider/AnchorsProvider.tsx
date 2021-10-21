import { useRouter } from 'next/router';
import { FC, useState, useEffect } from 'react';
import AnchorsContext, { Props as ContextProps } from './AnchorsContext';

type Props = {
  areaHeight?: number;
};

const findAnchorHash = () => {
  if (window.pageYOffset === 0) {
    return '';
  }

  const anchorElements = document.querySelectorAll('[data-type=anchor]') || [];

  for (let i = 0; i < anchorElements.length; i += 1) {
    const element = anchorElements[i];
    const { top } = element.getBoundingClientRect();

    if (top >= 0) {
      const hash = `#${element.getAttribute('id')}`;

      return hash;
    }
  }

  return '';
};

const AnchorsProvider: FC<Props> = ({ children }) => {
  const router = useRouter();
  const [selectedHref, setSelectedHref] = useState('');

  useEffect(() => {
    const onScrollHandler = () => {
      const anchorHash = findAnchorHash();

      if (window.location.hash !== anchorHash) {
        window.history.replaceState(null, '', anchorHash || window.location.pathname);
        setSelectedHref(anchorHash);
      }
    };

    document.addEventListener('mousewheel', onScrollHandler);
    return () => document.removeEventListener('mousewheel', onScrollHandler);
  }, []);

  useEffect(() => {
    const hashId = (router.asPath.split('#') || [])[1];
    const fullHash = hashId ? `#${hashId}` : '';
    setSelectedHref(fullHash);
  }, [router.asPath]);

  const props: ContextProps = {
    selectedHref,
  };

  return <AnchorsContext.Provider value={props}>{children}</AnchorsContext.Provider>;
};

export default AnchorsProvider;

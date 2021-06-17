import { FC, useCallback, useState } from 'react';
import { useMatchMedia } from '@cko/primitives';

import { Breakpoints } from 'constants/screen';
import AnchorsContext, { Props as ContextProps } from './AnchorsContext';

enum Offset {
  DESKTOP = 100,
  MOBILE = 180,
}

type Props = {
  areaHeight?: number;
};

const AnchorsProvider: FC<Props> = ({ children, areaHeight }) => {
  const [selectedHref, setSelectedHref] = useState<string>();
  const isMobile = useMatchMedia(Breakpoints.MOBILE);

  const onSelect = useCallback((href: string) => {
    setSelectedHref(href);
  }, []);

  const props: ContextProps = {
    onSelect,
    areaHeight,
    selectedHref,
    offsetTop: isMobile ? Offset.MOBILE : Offset.DESKTOP,
  };

  return <AnchorsContext.Provider value={props}>{children}</AnchorsContext.Provider>;
};

export default AnchorsProvider;

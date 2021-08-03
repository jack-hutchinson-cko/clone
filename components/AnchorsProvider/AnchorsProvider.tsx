import { FC, useCallback, useRef, useState } from 'react';
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

const AnchorsProvider: FC<Props> = ({ children }) => {
  const isMobile = useMatchMedia(Breakpoints.MOBILE);
  const [initialized, setInitialized] = useState<boolean>(false);
  const selectedMapRef = useRef<Map<string, boolean>>(new Map<string, boolean>());
  const [shownAnchors, setShownAnchors] = useState<string[]>([]);

  const onUpdateState = useCallback((href: string, state: boolean) => {
    selectedMapRef.current.set(href, state);

    const selected = [...selectedMapRef.current.entries()].reduce<string[]>(
      (arr, [hash, shown]) => {
        if (shown) arr.push(hash);
        return arr;
      },
      [],
    );
    setShownAnchors(selected);
    setInitialized(true);
  }, []);

  const props: ContextProps = {
    onUpdateState,
    shownAnchors,
    initialized,
    offsetTop: isMobile ? Offset.MOBILE : Offset.DESKTOP,
  };

  return <AnchorsContext.Provider value={props}>{children}</AnchorsContext.Provider>;
};

export default AnchorsProvider;

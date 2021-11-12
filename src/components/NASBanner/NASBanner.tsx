import React, { FC, useState, useEffect } from 'react';

import { IconBannerClose } from 'src/components/Icons';
import { Wrapper, BannerClose } from './NASBanner.styles';

const NAS_BANNER_KEY = 'bannerDismissed';

const NASBanner: FC = () => {
  const [show, setShow] = useState(false);

  const onCloseHandler = () => {
    setShow(false);
    globalThis.sessionStorage?.setItem(NAS_BANNER_KEY, 'true');
  };

  useEffect(() => {
    if (!globalThis.sessionStorage?.getItem(NAS_BANNER_KEY)) setShow(true);
  }, []);

  return show ? (
    <Wrapper>
      This version of our Documentation is for the eyes of employees and select merchants only
      <BannerClose onClick={onCloseHandler} aria-label="Close banner">
        <IconBannerClose />
      </BannerClose>
    </Wrapper>
  ) : null;
};

export default NASBanner;

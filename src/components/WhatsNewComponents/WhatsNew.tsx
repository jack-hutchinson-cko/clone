import { useEffect, useState, FC } from 'react';

import { NOTICEABLE_WIDGET_ID } from 'src/constants/keys';
import TipBox from '../TipBox';
import { WhatsNewWidget } from './WhatsNew.styles';
import { WindowWithNoticeableType } from './types';

const WhatsNew: FC = () => {
  const [hasWindow, setWindow] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: any;
    const windowWithNoticeable = window as WindowWithNoticeableType;

    if (windowWithNoticeable.noticeable) {
      setWindow(true);
      windowWithNoticeable.noticeable.render('widget', NOTICEABLE_WIDGET_ID);
    } else {
      setWindow(false);
      console.warn('Noticeable is missing, will retry in 100ms');
      intervalId = setInterval(() => {
        if (windowWithNoticeable.noticeable) {
          setWindow(true);
          windowWithNoticeable.noticeable.render('widget', NOTICEABLE_WIDGET_ID);
          clearInterval(intervalId);
        }
      }, 100);
    }

    return () => {
      clearInterval(intervalId);
      windowWithNoticeable.noticeable?.destroy('widget', NOTICEABLE_WIDGET_ID);
    };
  }, []);

  return hasWindow ? (
    <WhatsNewWidget id="noticeable-widget" />
  ) : (
    <TipBox title="Short error message descriptor here" variant="note">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan orci interdum id lectus
      cursus maecenas semper ante et. Nisi accumsan sed pharetra nunc urna. Id lobortis in duis ut
      quis suspendisse massa. Congue nulla venenatis, tortor, tellus tempus, lacus. Find out more
    </TipBox>
  );
};

export default WhatsNew;

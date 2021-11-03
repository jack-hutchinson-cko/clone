import { useEffect, FC } from 'react';

import { NOTICEABLE_WIDGET_ID } from 'constants/keys';
import { WhatsNewWidget } from './WhatsNew.styles';
import { WindowWithNoticeableType } from './types';

const WhatsNew: FC = () => {
  useEffect(() => {
    let intervalId: any;
    const windowWithNoticeable = window as WindowWithNoticeableType;

    if (windowWithNoticeable.noticeable) {
      windowWithNoticeable.noticeable.render('widget', NOTICEABLE_WIDGET_ID);
    } else {
      console.warn('Noticeable is missing, will retry in 100ms');
      intervalId = setInterval(() => {
        if (windowWithNoticeable.noticeable) {
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

  return <WhatsNewWidget id="noticeable-widget" />;
};

export default WhatsNew;

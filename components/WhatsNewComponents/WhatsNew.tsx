import { useEffect, FC } from 'react';

import { NOTICEABLE_WIDGET_ID } from 'constants/keys';
import { WhatsNewWidget } from './WhatsNew.styles';
import { WindowWithNoticeableType } from './types';

const WhatsNew: FC = () => {
  useEffect(() => {
    const windowWithNoticeable = window as WindowWithNoticeableType;
    setTimeout(() => {
      if (windowWithNoticeable.noticeable) {
        windowWithNoticeable?.noticeable.render('widget', NOTICEABLE_WIDGET_ID);
      }
    }, 200);

    return () => {
      if (windowWithNoticeable.noticeable) {
        windowWithNoticeable.noticeable.destroy('widget', NOTICEABLE_WIDGET_ID);
      }
    };
  }, []);

  return <WhatsNewWidget id="noticeable-widget" />;
};

export default WhatsNew;

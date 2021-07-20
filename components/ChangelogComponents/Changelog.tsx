import { useEffect, FC } from 'react';
import { NOTICEABLE_WIDGET_ID } from 'constants/keys';
import { ChangeLogWidget } from './Changelog.styles';
import { WindowWithNoticeableType } from './types';

const Changelog: FC = () => {
  useEffect(() => {
    const windowWithNoticeable = window as WindowWithNoticeableType;
    if (windowWithNoticeable.noticeable) {
      windowWithNoticeable.noticeable.render('widget', NOTICEABLE_WIDGET_ID);
    }
    return () => {
      if (windowWithNoticeable.noticeable) {
        windowWithNoticeable.noticeable.destroy('widget', NOTICEABLE_WIDGET_ID);
      }
    };
  }, []);

  return <ChangeLogWidget id="noticeable-widget" />;
};

export default Changelog;

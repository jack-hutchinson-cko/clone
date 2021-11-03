import { useEffect, FC, useState } from 'react';
import { NOTICEABLE_COUNTER_ID } from 'constants/keys';
import { WindowWithNoticeableType } from './types';
import { Counter, CounterWrapper } from './WhatsNew.styles';

const WhatsNewCounter: FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const windowWithNoticeable = window as WindowWithNoticeableType;
    setTimeout(() => {
      if (windowWithNoticeable.noticeable) {
        setIsLoading(true);
        windowWithNoticeable.noticeable.on(
          'widget:publication:unread_count:changed',
          NOTICEABLE_COUNTER_ID,
          (e) => {
            setIsLoading(false);
            setCounter(e.detail.value);
          },
        );
        setIsLoading(false);
        windowWithNoticeable.noticeable.render('widget', NOTICEABLE_COUNTER_ID);
      }
    }, 200);
    return () => {
      if (windowWithNoticeable.noticeable) {
        windowWithNoticeable.noticeable.destroy('widget', NOTICEABLE_COUNTER_ID);
      }
    };
  }, []);

  return (
    <CounterWrapper>
      <Counter id="noticeable-widget-label">{!isLoading ? counter : '...'}</Counter>
    </CounterWrapper>
  );
};

export default WhatsNewCounter;

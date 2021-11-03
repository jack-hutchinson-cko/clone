import { useEffect, FC, useState } from 'react';
import { NOTICEABLE_COUNTER_ID } from 'constants/keys';
import { WindowWithNoticeableType } from './types';
import { Counter, CounterWrapper } from './WhatsNew.styles';

const WhatsNewCounter: FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const windowWithNoticeable = window as WindowWithNoticeableType;
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
      windowWithNoticeable.noticeable.render('widget', NOTICEABLE_COUNTER_ID);
    }
    return () => {
      if (windowWithNoticeable.noticeable) {
        windowWithNoticeable.noticeable.destroy('widget', NOTICEABLE_COUNTER_ID);
      }
    };
  }, []);

  return (
    <CounterWrapper>
      {isLoading && <Counter id="noticeable-widget-label">...</Counter>}
      {!isLoading && counter > 0 && <Counter id="noticeable-widget-label">{counter}</Counter>}
    </CounterWrapper>
  );
};

export default WhatsNewCounter;

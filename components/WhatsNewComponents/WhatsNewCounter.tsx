import { useEffect, FC, useState } from 'react';
import { NOTICEABLE_COUNTER_ID } from 'constants/keys';
import { WindowWithNoticeableType } from './types';
import { Counter, CounterWrapper } from './WhatsNew.styles';

const WhatsNewCounter: FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const checkCount = () => {
    if (counter === 0) {
      const element = document.getElementById('noticeable-widget-label') as HTMLElement;
      if (element) element.style.display = 'none';
    }
  };

  useEffect(() => {
    const windowWithNoticeable = window as WindowWithNoticeableType;
    let intervalId: any;

    if (windowWithNoticeable.noticeable) {
      setIsLoading(true);
      windowWithNoticeable.noticeable.on(
        'widget:publication:unread_count:changed',
        NOTICEABLE_COUNTER_ID,
        (e) => {
          setIsLoading(false);
          setCounter(e.detail.value);
          checkCount();
        },
      );
      setIsLoading(false);
      windowWithNoticeable.noticeable?.render('widget', NOTICEABLE_COUNTER_ID);
    } else {
      console.warn('Noticeable is missing, will retry in 100ms');
      intervalId = setInterval(() => {
        if (windowWithNoticeable.noticeable) {
          windowWithNoticeable.noticeable.render('widget', NOTICEABLE_COUNTER_ID);
          clearInterval(intervalId);
        }
      }, 100);
    }
    return () => {
      clearInterval(intervalId);
      windowWithNoticeable.noticeable?.destroy('widget', NOTICEABLE_COUNTER_ID);
    };
  }, []);

  return (
    <CounterWrapper>
      <Counter id="noticeable-widget-label">{!isLoading ? counter : '...'}</Counter>
    </CounterWrapper>
  );
};

export default WhatsNewCounter;

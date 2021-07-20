import { useEffect, FC, useState } from 'react';
import { NOTICEABLE_COUNTER_ID } from 'constants/keys';
import { WindowWithNoticeableType } from './types';
import { Counter, CounterWrapper } from './Changelog.styles';

const ChangelogCounter: FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
      <Counter id="noticeable-widget-label">{isLoading ? '...' : counter}</Counter>
    </CounterWrapper>
  );
};

export default ChangelogCounter;

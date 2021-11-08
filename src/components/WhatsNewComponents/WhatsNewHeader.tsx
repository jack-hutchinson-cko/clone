import { useEffect, useState, FC } from 'react';
import Button from 'src/components/Button';
import { HeaderContainer, Header } from './WhatsNew.styles';
import { WindowWithNoticeableType } from './types';

type Props = {
  title: string;
};

const WhatsNewHeader: FC<Props> = ({ title }) => {
  const [hasWindow, setWindow] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: any;
    const windowWithNoticeable = window as WindowWithNoticeableType;

    if (windowWithNoticeable.noticeable) {
      setWindow(true);
    } else {
      intervalId = setInterval(() => {
        if (windowWithNoticeable.noticeable) {
          setWindow(true);
        }
      }, 100);
    }
  }, []);

  return (
    <HeaderContainer>
      <Header>{title}</Header>
      <Button as="a" size="large" variant="primary" href="#subscribe" isDisplayed={hasWindow}>
        Subscribe to updates
      </Button>
    </HeaderContainer>
  );
};

export default WhatsNewHeader;

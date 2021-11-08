import { useEffect, FC } from 'react';

import { NOTICEABLE_WIDGET_ID } from 'src/constants/keys';
import TipBox from '../TipBox';
import { WhatsNewWidget, CookieButton } from './WhatsNew.styles';
import { WindowWithNoticeableType } from './types';

interface Props {
  hasWindow: boolean;
}

const WhatsNew: FC<Props> = ({ hasWindow }) => {
  useEffect(() => {
    const windowWithNoticeable = window as WindowWithNoticeableType;

    if (hasWindow) {
      windowWithNoticeable.noticeable?.render('widget', NOTICEABLE_WIDGET_ID);
    }

    return () => {
      windowWithNoticeable.noticeable?.destroy('widget', NOTICEABLE_WIDGET_ID);
    };
  }, [hasWindow]);

  return hasWindow ? (
    <WhatsNewWidget id="noticeable-widget" />
  ) : (
    <TipBox title="You need to enable cookies to view this content" variant="note" small>
      <>
        We post about new features, improvements, changes and fixes to our products and
        documentation in this section.
        <br />
        <br />
        This page requires functional cookies. Update your
        <CookieButton type="button" id="ot-sdk-btn">
          cookie settings
        </CookieButton>{' '}
        to display this page’s content.
      </>
    </TipBox>
  );
};

export default WhatsNew;

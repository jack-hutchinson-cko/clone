import { FC } from 'react';
import { StyledIframe } from './Iframe.styles';

export type Props = {
  src: string;
  title: string;
  allowFullScreen?: boolean;
  position?:
    | 'relative'
    | 'absolute'
    | 'fixed'
    | 'sticky'
    | 'static'
    | 'inherit'
    | 'initial'
    | 'unset';
  display?: 'block' | 'none' | 'inline';
  height?: string;
  width?: string;
  target?: string;
  importance?: 'auto' | 'high' | 'low';
  overflow?: string;
  name?: string;
  allowpaymentrequest?: boolean;
  referrerpolicy?:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url';
  onLoad?: () => void;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  frameBorder?: number;
  scrolling?: 'auto' | 'yes' | 'no';
  id?: string;
  ariaHidden?: boolean;
  ariaLabel?: string;
  ariaLabelledby?: string;
  sandbox?:
    | 'allow-forms'
    | 'allow-modals'
    | 'allow-orientation-lock'
    | 'allow-pointer-lock'
    | 'allow-popups'
    | 'allow-popups-to-escape-sandbox'
    | 'allow-presentation'
    | 'allow-same-origin'
    | 'allow-scripts'
    | 'allow-storage-access-by-user-activation'
    | 'allow-top-navigation'
    | 'allow-top-navigation-by-user-activation';
  allow?: string;
};

const Iframe: FC<Props> = ({ title, src, ...props }) => {
  return <StyledIframe title={title} src={src} {...props} />;
};

export default Iframe;

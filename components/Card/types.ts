export type CardVariant = 'default' | 'media';

export type Props = {
  href: string;
  title?: string;
  children?: string;
  withAnchor?: boolean;
  variant?: CardVariant;
  imgSrc?: string;
  imgAlt?: string;
};

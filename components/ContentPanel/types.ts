export type VariantContentPanel = 'default' | 'eCommerce';

export type ContentPanelProps = {
  title?: string;
  imgSrc: string;
  imgAlt?: string;
  imgWidth?: number;
  imgHeight?: number;
  variant?: VariantContentPanel;
};

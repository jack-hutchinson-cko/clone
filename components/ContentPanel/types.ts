export type VariantContentPanel = 'default' | 'heading' | 'eCommerce';

export type ContentPanelProps = {
  title?: string;
  imgSrc: string;
  imgAlt?: string;
  imgWidth?: number;
  imgHeight?: number;
  variant?: VariantContentPanel;
};

export type TipBoxVariant = 'note' | 'tip' | 'info' | 'warning';

export type TipBoxProps = {
  variant?: TipBoxVariant;
  title?: string;
  children: string;
};

export type SubheadBackgroundColor = 'transparent' | 'blue';

export type TableSubheadProps = {
  colspan?: number;
  color?: SubheadBackgroundColor;
  isNoWrap?: boolean;
};

export type TableTicCellProps = {
  type?: 'check' | 'error';
};

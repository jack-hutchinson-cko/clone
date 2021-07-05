export type SubheadBackgroundColor = 'transparent' | 'blue';

export type TableSubheadProps = {
  colspan?: number;
  color?: SubheadBackgroundColor;
};

export type TableTicCellProps = {
  type?: 'check' | 'error';
};

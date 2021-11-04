export type SubheadBackgroundColor = 'transparent' | 'grey';

export type TableSubheadProps = {
  colspan?: number;
  color?: SubheadBackgroundColor;
  isNoWrap?: boolean;
};

export type TableTicCellProps = {
  type?: 'check' | 'error';
};

export type TableHeadProps = {
  headers: string[];
  sizes?: string[];
};

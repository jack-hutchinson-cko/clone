type ColumnSize<T> = {
  desktop?: T;
  tablet?: T;
  mobile?: T;
};

type ResultColumnSize<T> = {
  desktop: T;
  tablet: T;
  mobile: T;
};

export const getDefaultSizeParams = <T extends unknown>({
  dataBySize = {},
  defaultValue,
}: {
  dataBySize?: ColumnSize<T>;
  defaultValue: T;
}): ResultColumnSize<T> => {
  const { desktop, tablet, mobile } = dataBySize;

  return {
    desktop: desktop || defaultValue,
    tablet: tablet || desktop || defaultValue,
    mobile: mobile || tablet || desktop || defaultValue,
  };
};

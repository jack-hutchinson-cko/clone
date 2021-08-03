type ColumnSize<T> = {
  desktop?: T;
  tablet?: T;
  mobile?: T;
};

export const getDataBySize = <T extends unknown>({
  dataBySize = {},
  isMobile,
  isTablet,
  defaultValue,
}: {
  dataBySize?: ColumnSize<T>;
  isMobile: boolean;
  isTablet: boolean;
  defaultValue: T;
}): T => {
  const { desktop, tablet, mobile } = dataBySize;
  if (isMobile) {
    return mobile || tablet || desktop || defaultValue;
  }

  if (isTablet) {
    return tablet || desktop || defaultValue;
  }

  return desktop || defaultValue;
};

export const SIZE = {
  XL: 1360,
  L: 1024,
  M: 768,
  SM: 600,
  XS: 375,
};

export const Breakpoints = {
  DESKTOP: `(min-width: ${SIZE.L}px)`,
  TABLET: `(min-width: ${SIZE.M}px) and (max-width: ${SIZE.L - 1}px)`,
  MOBILE: `(max-width: ${SIZE.M - 1}px)`,
};

export const MobileBreakPoints = {
  MOBILE_L: `(min-width: ${SIZE.SM}px) and (max-width: ${SIZE.M - 1}px)`,
  MOBILE_M: `(min-width: ${SIZE.XS}px) and (max-width: ${SIZE.SM - 1}px)`,
  MOBILE_S: `(max-width: ${SIZE.XS - 1}px)`,
};

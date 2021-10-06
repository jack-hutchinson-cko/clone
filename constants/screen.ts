export enum SIZE {
  XL = 1360,
  L = 1024,
  M = 768,
  SM = 600,
  XS = 375,
}

export const Breakpoints = {
  DESKTOP: `(min-width: ${SIZE.L}px)`, // < 1024
  TABLET: `(min-width: ${SIZE.M}px) and (max-width: ${SIZE.L - 1}px)`, // 768 - 1023
  MOBILE: `(max-width: ${SIZE.M - 1}px)`, // < 767
};

export const MobileBreakPoints = {
  MOBILE_L: `(min-width: ${SIZE.SM}px) and (max-width: ${SIZE.M - 1}px)`, // 600 - 767
  MOBILE_M: `(min-width: ${SIZE.XS}px) and (max-width: ${SIZE.SM - 1}px)`, // 375 - 599
  MOBILE_S: `(max-width: ${SIZE.XS - 1}px)`, // < 374
};

export const createBreakpointBetween = (start: SIZE, end: SIZE): string =>
  `(min-width: ${start}px) and (max-width: ${end - 1}px)`;

export const createBreakpointFrom = (start: SIZE): string => `(min-width: ${start}px)`;

export const createBreakpointTo = (end: SIZE): string => `(max-width: ${end - 1}px)`;

export const getHashValue = (url: string): string => {
  if (url && url.includes('#')) return url.split('#')[1];
  return url;
};

export const cutOffHashValue = (url: string): string => {
  if (url && url.includes('#')) return url.split('#')[0];
  return url;
};

export const getAnchorUrl = (name: string, hash = true): string =>
  `${hash ? '#' : ''}${name.replace(/ /g, '_')}`;

export const getPageUrl = (): string => `${window.location.origin}${window.location.pathname}`;

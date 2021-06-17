export const getHashValue = (url: string): string => url.split('#')[1];

export const getPathValue = (url: string): string => url.split('#')[0];

export const updateNavigationHash = (slug: string): void => {
  window.location.hash = slug;
};

export const getAnchorUrl = (name: string): string => `#${name.replace(/ /g, '_')}`;

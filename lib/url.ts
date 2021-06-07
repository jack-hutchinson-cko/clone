export const getHashValue = (url: string): string | null => url.split('#')[1] || null

export const getPathValue = (url: string): string => url.split('#')[0]

export const updateNavigationHash = (slug: string): void => {
  window.location.hash = slug
}

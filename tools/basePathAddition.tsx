export const basePathAddition = (src: string): string => {
  const basePath = process.env.NEXT_PUBLIC_CLIENT_TYPE === 'ABC' ? '/docs' : '/docs/four';
  if (src.charAt(0) === '#') return src;
  return basePath + src;
};

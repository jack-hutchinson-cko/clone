export const basePathAddition = (src: string): string => {
  const basePath = process.env.NEXT_PUBLIC_CLIENT_TYPE === 'ABC' ? '/docs' : '/docs/four';
  return basePath + src;
};

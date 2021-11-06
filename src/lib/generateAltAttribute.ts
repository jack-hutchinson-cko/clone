export const generateAltAttribute = (src: string): string => {
  let arr;
  if (src.includes('%2F')) {
    arr = src.split('%2F');
  } else {
    arr = src.split('/');
  }
  const item = arr[arr.length - 1].split('.')[0];
  return item
    .toLowerCase()
    .replace(/[0-9+-_]/g, ' ')
    .trim();
};

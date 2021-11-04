export const truncateHighlighterResult = (value: string, maxWordsCount: number): string => {
  const arrayOfItem = value.match(/([^\s]+)/g) || [];
  const arrayOfItemLength = arrayOfItem.length;
  const firstHighlightedIndex = arrayOfItem.findIndex(
    (item) => item.indexOf('<ais-highlight') !== -1,
  );

  const highlightedIndex = firstHighlightedIndex === -1 ? 0 : firstHighlightedIndex;

  const startIndex = highlightedIndex - maxWordsCount > 0 ? highlightedIndex - maxWordsCount : 0;
  const endIndex =
    highlightedIndex + maxWordsCount > arrayOfItemLength
      ? arrayOfItemLength
      : highlightedIndex + maxWordsCount;

  const prefix = startIndex === 0 ? '' : '...';
  const postfix = endIndex === arrayOfItemLength ? '' : '...';
  return `${prefix}${arrayOfItem.slice(startIndex, endIndex).join(' ')}${postfix}`;
};

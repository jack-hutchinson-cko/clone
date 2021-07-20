import { isNaN } from 'lodash';

const getMarginStyle = (element: HTMLElement, property: string): number => {
  const result = Number(
    getComputedStyle(element, null).getPropertyValue(property).replace('px', ''),
  );

  return isNaN(result) ? 0 : result;
};

export const getHeightOfInnerContent = (element: HTMLElement | null): number => {
  if (!element || !element.hasChildNodes()) {
    return 0;
  }

  const { childNodes } = element;

  const firstChild = childNodes[0] as HTMLElement;
  const lastChild = childNodes[childNodes.length - 1] as HTMLElement;

  const height = lastChild.getBoundingClientRect().bottom - firstChild.getBoundingClientRect().top;
  const marginTop = getMarginStyle(firstChild, 'margin-top');
  const marginBottom = getMarginStyle(lastChild, 'margin-bottom');

  return height + marginTop + marginBottom;
};

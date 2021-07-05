import { get } from 'lodash';

const htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&#x27;': "'",
};

const reEscapedHtml = /&(?:amp|lt|gt|quot|#x27|#(0+)?39);/g;
const reHasEscapedHtml = RegExp(reEscapedHtml.source);

export const unescape = (str: string): string =>
  str && reHasEscapedHtml.test(str)
    ? str.replace(reEscapedHtml, (entity: string) => get(htmlUnescapes, entity, "'"))
    : str || '';

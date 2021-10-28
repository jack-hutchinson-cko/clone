/* eslint-disable no-await-in-loop */
import systemPath from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import { forEachFileTree } from 'lib/fileParserCommon';
import { CLIENT_SETTINGS_BY_TYPE } from 'constants/clientSettings';

dotenv.config();

export const getSitemapUrlList = (filePath: string): string[] => {
  if (!filePath) {
    return [];
  }
  const result: string[] = [];
  const omittedLinks = ['/example-page', '/integration-builder'];

  forEachFileTree(
    {
      parentFilePath: systemPath.join(process.cwd(), filePath),
      parentPath: '',
      parentArticles: [],
    },
    ({ path }) => {
      if (!omittedLinks.includes(path)) {
        result.push(path);
      }
    },
  );

  return result;
};

const getXMLUrlItem = (url: string) => `\n\t<url>\n\t\t<loc>${url}</loc>\n\t</url>`;

const getXmlLinksItems = ({ listLinks, baseUrl }: { listLinks: string[]; baseUrl: string }) =>
  listLinks.length
    ? listLinks.reduce(
        (result, url) => `${result}${getXMLUrlItem(`${baseUrl}${url}`)}`,
        getXMLUrlItem(baseUrl),
      )
    : '';

export const createSiteMap = ({
  docsArticlesPath,
  baseUrl,
  faqPath,
  outputFileName,
}: {
  docsArticlesPath: string;
  baseUrl: string;
  faqPath: string;
  outputFileName: string;
}): void => {
  try {
    const listOfSiteUrls = getSitemapUrlList(docsArticlesPath);
    const faqSiteUrls = getSitemapUrlList(faqPath);
    const articlesXmlLinks = getXmlLinksItems({ listLinks: listOfSiteUrls, baseUrl });
    const faqXmlLinks = getXmlLinksItems({ listLinks: faqSiteUrls, baseUrl: `${baseUrl}/faq` });
    const whatsNewXmlLinks = getXMLUrlItem(`${baseUrl}/whats-new`);

    const allLinks = `${articlesXmlLinks}${faqXmlLinks}${whatsNewXmlLinks}`;

    const xmlFileBody = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml">${allLinks}\n</urlset>`;

    fs.writeFileSync(outputFileName, xmlFileBody);

    console.log(`${outputFileName} successfully generated`);
  } catch (error) {
    console.log(error);
  }
};

createSiteMap({
  docsArticlesPath: CLIENT_SETTINGS_BY_TYPE.ABC.docArticlesFilePath,
  faqPath: CLIENT_SETTINGS_BY_TYPE.ABC.FAQFilePath,
  baseUrl: 'https://www.checkout.com/docs',
  outputFileName: 'SiteMapABC.xml',
});

createSiteMap({
  docsArticlesPath: CLIENT_SETTINGS_BY_TYPE.NAS.docArticlesFilePath,
  faqPath: CLIENT_SETTINGS_BY_TYPE.NAS.FAQFilePath,
  baseUrl: 'https://www.checkout.com/docs/four',
  outputFileName: 'SiteMapNAS.xml',
});

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

import { findPageData, parseDocContent } from 'src/lib/apiFileParser';
import { clientSettings } from 'src/constants/clientSettings';

const handler = async ({ query }: NextApiRequest, res: NextApiResponse) => {
  const { pageUrl, sectionUrl } = query;

  try {
    const pageFileData = findPageData({
      parentFilePath: path.join(process.cwd(), clientSettings.docArticlesFilePath),
      pageUrl: pageUrl as string,
    });

    if (pageFileData) {
      const { content, data } = pageFileData;
      const { pageContent, pageData, type } = await parseDocContent({
        content,
        data,
        sectionUrl: sectionUrl as string,
      });

      res.statusCode = 200;
      return res.json({ pageContent, pageData, type });
    }

    res.statusCode = 404;
    return res.json({});
  } catch (error) {
    res.statusCode = 500;
    return res.json({});
  }
};

export default handler;

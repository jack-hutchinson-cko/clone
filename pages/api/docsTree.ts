/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from 'path';
import { get } from 'lodash';
import { NextApiRequest, NextApiResponse } from 'next';
import { getDocArticlesSettings } from 'lib/fileParser';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  const ABCDocsPath = path.join(process.cwd(), get(_req, 'query.filePath'));

  res.json(getDocArticlesSettings(ABCDocsPath).sidebarDocLinks);
};

export default handler;

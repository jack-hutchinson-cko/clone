/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import path from 'path';
import { get } from 'lodash';
import { NextApiRequest, NextApiResponse } from 'next';
import { getDocArticlesSettings } from 'src/lib/fileParser';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  const docsPath = path.join(process.cwd(), get(_req, 'query.filePath'));

  res.json(getDocArticlesSettings(docsPath).sidebarDocLinks);
};

export default handler;

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import systemPath from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { getDocArticlesSettings } from 'lib/fileParser';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;

  res.json(getDocArticlesSettings().sidebarDocLinks);
};

export default handler;

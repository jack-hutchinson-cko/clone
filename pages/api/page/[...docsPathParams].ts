import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { findPageMetadata } from 'lib/apiFileParser';

const filePathByAccount = {
  ABC: 'docs/ABC/Articles',
  NAS: 'docs/NAC/Articles',
};

const handler = (_req: NextApiRequest, res: NextApiResponse): void => {
  const { docsPathParams = [], account } = _req.query;
  const filePath = filePathByAccount[account as 'ABC' | 'NAS'];
  const pageUrl = `/${(docsPathParams as string[]).join('/')}`;

  try {
    const result = findPageMetadata({
      parentFilePath: path.join(process.cwd(), filePath),
      pageUrl,
    });

    res.statusCode = 200;
    return res.json(result);
  } catch (error) {
    res.statusCode = 500;
    return res.json({});
  }
};

export default handler;

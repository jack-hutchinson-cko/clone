import { FC } from 'react';
import { GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import MDXProvider from 'components/MDXProvider';
import { PageContent } from 'styles/index.styles';
import { WhatsNewHeader, WhatsNew } from 'components/WhatsNewComponents';
import { getDocArticleData } from 'lib/fileParser';
import { clientSettings } from 'constants/clientSettings';

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: { [key: string]: string };
};

const WhatsNewPage: FC<Props> = ({ frontMatter, source }) => {
  return (
    <PageContent>
      <WhatsNewHeader title={frontMatter.title} />
      <MDXProvider source={source} />
      <WhatsNew />
    </PageContent>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { source, frontMatter } = await getDocArticleData({
    filePath: clientSettings.whatsNewPath,
  });

  return {
    props: {
      source,
      frontMatter,
    },
  };
};

export default WhatsNewPage;

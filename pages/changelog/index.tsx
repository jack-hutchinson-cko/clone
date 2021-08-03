import { FC } from 'react';
import { GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import MDXProvider from 'components/MDXProvider';
import { PageContent } from 'styles/index.styles';
import { ChangelogHeader, Changelog } from 'components/ChangelogComponents';
import { getDocArticleData } from 'lib/fileParser';
import { clientSettings } from 'constants/clientSettings';

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: { [key: string]: string };
};

const ChangeLogPage: FC<Props> = ({ frontMatter, source }) => {
  return (
    <PageContent>
      <ChangelogHeader title={frontMatter.title} />
      <MDXProvider source={source} />
      <Changelog />
    </PageContent>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { source, frontMatter } = await getDocArticleData({
    filePath: clientSettings.changelogPath,
  });

  return {
    props: {
      source,
      frontMatter,
    },
  };
};

export default ChangeLogPage;

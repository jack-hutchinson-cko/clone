import { FC, useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import MDXProvider from 'src/components/MDXProvider';
import { PageContent } from 'styles/index.styles';
import { WhatsNewHeader, WhatsNew } from 'src/components/WhatsNewComponents';
import { WindowWithNoticeableType } from 'src/components/WhatsNewComponents/types';
import { getDocArticleData, getDocsSidebarDocLinks } from 'src/lib/fileParser';
import { clientSettings } from 'src/constants/clientSettings';
import withMainLayout from 'src/hoc/withMainLayout';

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: { [key: string]: string };
};

const WhatsNewPage: FC<Props> = ({ frontMatter, source }) => {
  const [hasWindow, setWindow] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: any;
    const windowWithNoticeable = window as WindowWithNoticeableType;

    if (windowWithNoticeable.noticeable) {
      setWindow(true);
    } else {
      intervalId = setInterval(() => {
        if (windowWithNoticeable.noticeable) {
          setWindow(true);
        }
      }, 100);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <PageContent>
      <WhatsNewHeader displaySubscribe={hasWindow} title={frontMatter.title} />
      {hasWindow && <MDXProvider source={source} />}
      <WhatsNew hasWindow={hasWindow} />
    </PageContent>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { source, frontMatter } = await getDocArticleData({
    filePath: clientSettings.whatsNewPath,
  });
  const sidebarDocLinks = getDocsSidebarDocLinks();

  return {
    props: {
      source,
      frontMatter,
      sidebarDocLinks,
    },
  };
};

export default withMainLayout(WhatsNewPage);

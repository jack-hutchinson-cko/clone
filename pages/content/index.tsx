import { NextPage } from 'next';
import { useRouter } from 'next/router';
import useSWR, { SWRResponse } from 'swr';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Error from 'next/error';

import { ContentPageData, ContentPageType } from 'src/types/content';
import MDXProvider from 'src/components/MDXProvider';
import { PageContent, Title } from 'styles/index.styles';

type ContentApiResponse = {
  pageContent: MDXRemoteSerializeResult;
  pageData: ContentPageData;
  type: ContentPageType;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const makeUrl = (pageUrl: string, sectionUrl?: string) => {
  const url = `/docs/api/content?pageUrl=${pageUrl}`;
  return sectionUrl ? `${url}&sectionUrl=${sectionUrl}` : url;
};

const DocContent: NextPage = () => {
  const {
    query: { pageUrl, sectionUrl },
    isReady,
  } = useRouter();
  const result = useSWR<ContentApiResponse, Error>(
    isReady ? makeUrl(pageUrl as string, sectionUrl as string) : null,
    fetcher,
  );

  const renderContent = ({ data, error }: SWRResponse<ContentApiResponse, Error>) => {
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    return (
      <>
        {data.type === ContentPageType.PAGE && (
          <header>
            <Title>{data.pageData.title}</Title>
          </header>
        )}
        <MDXProvider source={data.pageContent} />
      </>
    );
  };

  return <PageContent>{renderContent(result)}</PageContent>;
};

export default DocContent;

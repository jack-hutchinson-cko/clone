import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { useRouter } from 'next/router';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

import { PureHead as Head } from 'components/Head';
import BreadCrumbs from 'components/BreadCrumbs';
import { TextHeadingOne } from 'components/TextHeading';
import MDXProvider from 'components/MDXProvider';
import SectionList from 'components/SectionList';
import {
  ContentWrapper,
  HeadDescription,
  HeaderContainer,
  Layout,
  MainContent,
  SectionContent,
  SectionLinksContainer,
  QuestionsContainer,
  HeadingThree,
} from 'components/FAQStyledComponents';
import {
  getFAQPathUrls,
  getFileNameFromFAQPath,
  getDocArticleData,
  getFAQSections,
} from 'lib/fileParser';
import { SectionListItem } from 'types/sectionList';
import { BreadCrumbsItems } from 'types/content';
import FAQSearchWidget from 'components/Search/FAQSearchWidget';
import withMainLayout from 'hoc/withMainLayout';

type Props = {
  frontMatter: {
    title: string;
    description: string;
  };
  source: MDXRemoteSerializeResult;
  sectionList: SectionListItem[];
  breadCrumbsItem: BreadCrumbsItems;
};

const FAQSection: NextPage<Props> = ({ frontMatter, source, sectionList, breadCrumbsItem }) => {
  const router = useRouter();

  return (
    <>
      <Head title={frontMatter.title} />
      <SectionContent>
        <ContentWrapper>
          <FAQSearchWidget />
        </ContentWrapper>
      </SectionContent>
      <ContentWrapper>
        <BreadCrumbs withIcon breadCrumbsItem={breadCrumbsItem} />
        <Layout>
          <MainContent>
            <HeaderContainer>
              <TextHeadingOne>{frontMatter.title}</TextHeadingOne>
              <HeadDescription>{frontMatter.description}</HeadDescription>
            </HeaderContainer>
            <QuestionsContainer>
              <HeadingThree>Question</HeadingThree>
              <MDXProvider source={source} />
            </QuestionsContainer>
          </MainContent>
          <SectionLinksContainer>
            <SectionList list={sectionList} activeItem={router.asPath} />
          </SectionLinksContainer>
        </Layout>
      </ContentWrapper>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getFAQPathUrls(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const { faqSection = '' } = params;
  const faqCategories = getFAQSections();
  const filePath = getFileNameFromFAQPath(faqSection as string);
  const { frontMatter, source } = await getDocArticleData({
    filePath,
    options: {
      addGitInfo: false,
    },
  });
  const sectionList = faqCategories.map(({ title, imageSrc, href }) => ({
    title,
    url: href,
    imageSrc,
  }));

  return {
    props: {
      frontMatter,
      source,
      sectionList,
      breadCrumbsItem: [{ name: 'Home', url: '/faq' }],
    },
  };
};

export default withMainLayout(FAQSection, { isFAQSection: true });

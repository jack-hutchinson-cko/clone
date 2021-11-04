import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { getDocArticleData, getDocsSidebarDocLinks } from 'src/lib/fileParser';
import { clientSettings } from 'src/constants/clientSettings';
import HeroImage from 'src/components/HeroImage';
import { HomePageContent } from 'src/types/homepage';
import MDXProvider from 'src/components/MDXProvider';
import Button from 'src/components/Button';
import withMainLayout from 'src/hoc/withMainLayout';

import {
  IntroWrapper,
  ContentBlock,
  IntroTitle,
  IntroDescription,
  PageContent,
  ImageBoxWrapper,
} from '../styles/index.styles';

type Props = HomePageContent;

const HomePage: NextPage<Props> = ({ source, title, description, getStartedLink }) => {
  return (
    <PageContent id="main">
      <IntroWrapper>
        <ContentBlock>
          <IntroTitle>{title}</IntroTitle>
          <IntroDescription>{description}</IntroDescription>
          <Link href={getStartedLink}>
            <Button variant="primary" size="large">
              Get started
            </Button>
          </Link>
        </ContentBlock>
        <ContentBlock>
          <ImageBoxWrapper maxDesktopWidth={480} hideForMobile>
            <HeroImage />
          </ImageBoxWrapper>
        </ContentBlock>
      </IntroWrapper>
      <MDXProvider source={source} />
    </PageContent>
  );
};

export default withMainLayout(HomePage);

export const getStaticProps: GetStaticProps = async () => {
  const { source, frontMatter } = await getDocArticleData({
    filePath: clientSettings.homePagePath,
  });
  const { title, description, getStartedLink } = frontMatter;

  const sidebarDocLinks = getDocsSidebarDocLinks();

  return {
    props: {
      source,
      title,
      description,
      getStartedLink,
      sidebarDocLinks,
    },
  };
};

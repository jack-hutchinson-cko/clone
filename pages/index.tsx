import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { getDocArticleData } from 'lib/fileParser';
import { clientSettings } from 'constants/clientSettings';
import HeroImage from 'components/HeroImage';
import { HomePageContent } from 'types/homepage';
import MDXProvider from 'components/MDXProvider';

import {
  IntroWrapper,
  ContentBlock,
  IntroTitle,
  IntroDescription,
  GetStartedLink,
  PageContent,
  ImageBoxWrapper,
} from '../styles/index.styles';

type Props = HomePageContent;

const HomePage: NextPage<Props> = ({ source, title, description, getStartedLink }) => {
  return (
    <PageContent>
      <IntroWrapper>
        <ContentBlock>
          <IntroTitle>{title}</IntroTitle>
          <IntroDescription>{description}</IntroDescription>
          <Link href={getStartedLink}>
            <GetStartedLink>Get started</GetStartedLink>
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

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const { source, frontMatter } = await getDocArticleData({
    filePath: clientSettings.homePagePath,
  });
  const { title, description, getStartedLink } = frontMatter;

  return {
    props: {
      source,
      title,
      description,
      getStartedLink,
    },
  };
};

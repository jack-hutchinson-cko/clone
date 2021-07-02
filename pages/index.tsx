import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ListItem } from '@cko/primitives';
import { IconActionArrowRight } from '@cko/icons';
import { getHomePageContent } from 'lib/homePageContent';
import { HomePageContent } from 'types/homepage';
import {
  IntroWrapper,
  ContentBlock,
  IntroTitle,
  IntroDescription,
  GetStartedLink,
  BlocksWrapper,
  BlockTitle,
  BlockDescription,
  BlockList,
  BlockLink,
  PageContent,
} from '../styles/index.styles';

type Props = HomePageContent;

const HomePage: NextPage<Props> = ({ intro, blocks }) => {
  return (
    <PageContent>
      <IntroWrapper>
        <ContentBlock>
          <IntroTitle>{intro.title}</IntroTitle>
          <IntroDescription>{intro.description}</IntroDescription>
          <Link href={intro.getStartedUrl}>
            <GetStartedLink>Get started</GetStartedLink>
          </Link>
        </ContentBlock>
        <ContentBlock>
          <Image src={intro.imageUrl} width={480} height={335} />
        </ContentBlock>
      </IntroWrapper>
      <BlocksWrapper>
        {blocks.map(({ id, title, imageUrl, description, links = [] }) => (
          <ContentBlock key={id}>
            <Image src={imageUrl} width={465} height={190} alt={title} />
            <BlockTitle>{title}</BlockTitle>
            <BlockDescription>{description}</BlockDescription>
            <BlockList>
              {links.map((linkItem) => (
                <ListItem key={linkItem.id}>
                  <Link href={linkItem.url}>
                    <BlockLink>
                      {linkItem.name}
                      <IconActionArrowRight />
                    </BlockLink>
                  </Link>
                </ListItem>
              ))}
            </BlockList>
          </ContentBlock>
        ))}
      </BlocksWrapper>
    </PageContent>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const { intro, blocks } = await getHomePageContent();

  return {
    props: {
      intro,
      blocks,
    },
  };
};

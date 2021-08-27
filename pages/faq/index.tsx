import { GetStaticProps, NextPage } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import MDXProvider from 'components/MDXProvider';
import { getFAQSections, getPopularFAQItems, FAQSectionType } from 'lib/fileParser';
import CardWrapper from 'components/CardWrapper';
import {
  ContentWrapper,
  SectionContent,
  PopularFaqItems,
  TextHeadingOne,
  TextHeadingThree,
  StyledCategoriesItem,
} from 'components/FAQStyledComponents';

type Props = {
  faqCategories: FAQSectionType[];
  popularFAQItemsSource: MDXRemoteSerializeResult;
};

const FAQHomePage: NextPage<Props> = ({ faqCategories, popularFAQItemsSource }) => {
  return (
    <>
      <ContentWrapper>
        <TextHeadingOne>Welcome to frequently asked questions</TextHeadingOne>
      </ContentWrapper>
      <SectionContent>
        <ContentWrapper>
          <TextHeadingThree>Browse by category</TextHeadingThree>
          <CardWrapper
            cardsInRow={{
              desktop: 3,
              tablet: 2,
              mobile: 1,
            }}
          >
            {faqCategories.map((faqItem) => (
              <StyledCategoriesItem key={faqItem.href} {...faqItem} />
            ))}
          </CardWrapper>
          <TextHeadingThree>Popular questions</TextHeadingThree>
          <PopularFaqItems>
            <MDXProvider source={popularFAQItemsSource} />
          </PopularFaqItems>
        </ContentWrapper>
      </SectionContent>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const faqCategories = getFAQSections();
  const popularFAQItemsSource = await getPopularFAQItems();

  return {
    props: {
      faqCategories,
      popularFAQItemsSource,
      isFAQSection: true,
    },
  };
};

export default FAQHomePage;

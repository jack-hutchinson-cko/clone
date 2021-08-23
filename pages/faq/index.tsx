import { GetStaticProps, NextPage } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import MDXProvider from 'components/MDXProvider';
import { getFAQSections, getPopularFAQItems, FAQSectionType } from 'lib/fileParser';
import { CategoriesItem } from 'components/Categories';
import CardWrapper from 'components/CardWrapper';
import { TextHeadingOne, TextHeadingThree } from 'components/TextHeading';
import { ContentWrapper, SectionContent, PopularFaqItems } from 'components/FAQStyledComponents';

type Props = {
  faqCategories: FAQSectionType[];
  popularFAQItemsSource: MDXRemoteSerializeResult;
};

const FAQHomePage: NextPage<Props> = ({ faqCategories, popularFAQItemsSource }) => {
  return (
    <>
      <ContentWrapper>
        <TextHeadingOne>
          Welcome to frequently <br />
          asked questions
        </TextHeadingOne>
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
              <CategoriesItem key={faqItem.href} {...faqItem} />
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

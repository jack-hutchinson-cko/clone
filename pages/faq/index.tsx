import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import MDXProvider from 'src/components/MDXProvider';
import { getFAQSections, getPopularFAQItems, FAQSectionType } from 'src/lib/fileParser';
import CardWrapper from 'src/components/CardWrapper';
import {
  ContentWrapper,
  SectionContent,
  PopularFaqItems,
  HeadingOne,
  HeadingThree,
  StyledCategoriesItem,
  SearchFieldWrapper,
  SearchExamples,
  SearchLabel,
} from 'src/components/FAQStyledComponents';
import Head from 'src/components/Head';
import SectionTag from 'src/components/Tag/SectionTag';
import FAQSearchWidget from 'src/components/Search/FAQSearchWidget';
import withErrorPage from 'src/hoc/withErrorPage';
import { clientSettings } from 'src/constants/clientSettings';
import withMainLayout from 'src/hoc/withMainLayout';

type Props = {
  faqCategories: FAQSectionType[];
  popularFAQItemsSource: MDXRemoteSerializeResult;
};

const CardsSettings = {
  desktop: 3,
  tablet: 2,
  mobile: 1,
};

const FAQHomePage: NextPage<Props> = ({ faqCategories, popularFAQItemsSource }) => {
  return (
    <>
      <Head title="FAQ" />
      <ContentWrapper id="main">
        <HeadingOne>Welcome to frequently asked questions</HeadingOne>
        <SearchLabel>
          Please type in a question regarding Checkout.com’s products or services.
        </SearchLabel>
        <SearchFieldWrapper>
          <FAQSearchWidget />
        </SearchFieldWrapper>
        <SearchExamples>
          <p>For example:</p>
          <SectionTag title="hub password" url="/faq/search?query=hub%20password&page=1" />
          <SectionTag title="test cards" url="/faq/search?query=test%20cards&page=1" />
          <SectionTag title="response 20005" url="/faq/search?query=response%2020005&page=1" />
          <SectionTag title="do not honor" url="/faq/search?query=do%20not%20honor&page=1" />
        </SearchExamples>
      </ContentWrapper>
      <SectionContent>
        <ContentWrapper>
          <HeadingThree>Browse by category</HeadingThree>
          <CardWrapper cardsInRow={CardsSettings}>
            {faqCategories.map((faqItem) => (
              <StyledCategoriesItem key={faqItem.href} {...faqItem} />
            ))}
          </CardWrapper>
          <HeadingThree>Popular questions</HeadingThree>
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
  const { FAQPageEnable } = clientSettings;

  return {
    props: {
      faqCategories,
      popularFAQItemsSource,
      isFAQSection: FAQPageEnable,
      isRedirectToErrorPage: !FAQPageEnable,
    },
  };
};

const FAQPage = withMainLayout(FAQHomePage, { isFAQSection: true });
export default withErrorPage(FAQPage);

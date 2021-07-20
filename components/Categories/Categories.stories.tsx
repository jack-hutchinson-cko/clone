import { Story, Meta } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import CategoriesList from './CategoriesList';
import CategoriesItem, { Props as CategoriesItemProps } from './CategoriesItem';

type Props = {
  list: PropsWithChildren<CategoriesItemProps>[];
};

export const CategoriesStory: Story<Props> = ({ list }) => {
  return (
    <CategoriesList>
      {list.map(({ children, ...rest }) => (
        <CategoriesItem {...rest}>{children}</CategoriesItem>
      ))}
    </CategoriesList>
  );
};

CategoriesStory.storyName = 'Categories';
CategoriesStory.args = {
  list: [
    {
      href: '/c1',
      title: 'Test category',
      imageSrc: '/faq/category-ecom.svg',
      children: <span>Test description</span>,
    },
    {
      href: '/c2',
      title: 'Test category 2',
      imageSrc: '/faq/category-payments.svg',
      children: <span>Test description 2</span>,
    },
    {
      href: '/c2',
      title: 'Test category 3',
      imageSrc: '/faq/category-reporting.svg',
      children: <span>Test description 3</span>,
    },
  ],
};

export default {
  title: 'Categories',
  component: CategoriesList,
} as Meta;

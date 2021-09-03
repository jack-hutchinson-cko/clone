import React from 'react';
import { mount } from '@cypress/react';

import { ThemeProvider } from 'theme/ThemeProvider';
import { SectionListItem as SectionListType } from 'types/sectionList';
import SectionList from '.';

export const sectionList: SectionListType[] = [
  {
    url: '/faq/my-account',
    title: 'My account',
    imageSrc: '/faq/my-account',
  },
  {
    url: '/faq/integration',
    title: 'Integration',
    imageSrc: '/faq/my-account',
  },
  {
    url: '/faq/payments-and-refunds',
    title: 'Payments and refunds',
    imageSrc: '/faq/my-account',
  },
  {
    url: '/faq/reporting',
    title: 'Reporting',
    imageSrc: '/faq/my-account',
  },
  {
    url: '/faq/risk-management',
    title: 'Risk management',
    imageSrc: '/faq/my-account',
  },
  {
    url: '/faq/e-commerce-platforms',
    title: 'E-commerce platforms',
    imageSrc: '/faq/my-account',
  },
];

beforeEach(() => {
  mount(
    <ThemeProvider>
      <SectionList data-cy="section-list" activeItem="My account" list={sectionList} />
    </ThemeProvider>,
  );
});

describe('SectionList', () => {
  it('should render SectionList wrapper', () => {
    cy.get('[data-cy=section-list]').should('exist');
  });

  it(`should render ${sectionList.length} SectionItems`, () => {
    cy.get('[data-cy=section-list-item]').should('have.length', sectionList.length);
    cy.get('[data-cy=section-list-item]').should('not.have.length', sectionList.length + 5);
  });
});

describe('SectionItem', () => {
  it('should render SectionItem', () => {
    cy.get('[data-cy=section-list-item]').should('exist');
  });

  it('links should have the right URLs', () => {
    sectionList.forEach((_, index) => {
      cy.get('[data-cy=section-list-item]')
        .children()
        .eq(index)
        .invoke('attr', 'href')
        .should('eq', sectionList[index].url);
    });
  });

  it('links should contains the right titles', () => {
    sectionList.forEach((_, index) => {
      cy.get('[data-cy=section-list-item]')
        .eq(index)
        .invoke('attr', 'href')
        .contains(sectionList[index].title);
    });
  });

  it('links should contains svg icon', () => {
    cy.get('[data-cy=section-list-item]').children().get('a').children().get('img').should('exist');
  });
});

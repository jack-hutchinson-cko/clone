import React from 'react';
import { mount } from '@cypress/react';

import { ThemeProvider } from 'theme/ThemeProvider';
import { SectionList as SectionListType } from 'types/sectionList';
import {
  IconMyAccount,
  IconIntegration,
  IconPaymentsAndRefunds,
  IconReporting,
  IconRiskManagement,
  IconEcommerce,
} from 'components/Icons';
import SectionList from '.';

export const sectionList: SectionListType[] = [
  {
    url: '/faq/my-account',
    title: 'My account',
    Icon: IconMyAccount,
  },
  {
    url: '/faq/integration',
    title: 'Integration',
    Icon: IconIntegration,
  },
  {
    url: '/faq/payments-and-refunds',
    title: 'Payments and refunds',
    Icon: IconPaymentsAndRefunds,
  },
  {
    url: '/faq/reporting',
    title: 'Reporting',
    Icon: IconReporting,
  },
  {
    url: '/faq/risk-management',
    title: 'Risk management',
    Icon: IconRiskManagement,
  },
  {
    url: '/faq/e-commerce-platforms',
    title: 'E-commerce platforms',
    Icon: IconEcommerce,
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
    cy.get('[data-cy=section-list-item]').children().get('a').children().get('svg').should('exist');
  });
});

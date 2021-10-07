import React from 'react';
import { mount } from '@cypress/react';

import { ThemeProvider } from 'theme/ThemeProvider';
import SectionLink from '.';

const mockProps = {
  title: 'How do I add a new payment method to my account?',
  titleUrl: '/faq/integration/how-do-i-add-a-new-payment-method-to-my-account',
  description:
    "Typically, this means that the customer's card issuing bank (or the acquirer) has declined the transaction. For example, if...",
};

beforeEach(() => {
  mount(
    <ThemeProvider>
      <SectionLink data-cy="section-link" {...mockProps}>
        Example text in SectionLink
      </SectionLink>
    </ThemeProvider>,
  );
});

describe('SectionLink', () => {
  it('should render SectionLink wrapper', () => {
    cy.get('[data-cy=section-link]').should('exist');
  });

  it('should render SectionLink title', () => {
    cy.get('[data-cy=section-link-title]').contains(mockProps.title);
  });

  it('should render SectionLink description', () => {
    cy.get('[data-cy=section-link-description]').contains(mockProps.description);
  });

  it('title should have link with desired url', () => {
    cy.get('[data-cy=section-link-title]')
      .children()
      .first()
      .invoke('attr', 'href')
      .should('eq', `/docs${mockProps.titleUrl}`);
  });

  it('should render SectionLink with children', () => {
    cy.get('[data-cy=section-link]').contains('Example text in SectionLink');
  });
});

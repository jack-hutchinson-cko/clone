import React from 'react';
import { mount } from '@cypress/react';

import { ThemeProvider } from 'theme/ThemeProvider';
import { List, ListNumberItem } from '..';

beforeEach(() => {
  mount(
    <ThemeProvider>
      <List>
        <ListNumberItem data-cy="list-number-item" number={1}>
          Example item 1
        </ListNumberItem>
        <ListNumberItem data-cy="list-number-item" number={2}>
          Example item 2
        </ListNumberItem>
      </List>
    </ThemeProvider>,
  );
});

describe('ListNumberItem', () => {
  it('should render two ListNumberItem', () => {
    cy.get('[data-cy=list-number-item').should('have.length', 2);
  });

  it('should render inner text', () => {
    cy.get('[data-cy=list-number-item').contains('Example item 1');
    cy.get('[data-cy=list-number-item').contains('Example item 2');
  });

  it('should have a matching number in the number parameter', () => {
    cy.get('[data-number=1]').should('exist');
    cy.get('[data-number=2]').should('exist');
  });
});

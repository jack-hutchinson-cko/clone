import React from 'react';
import { mount } from '@cypress/react';

import { ThemeProvider } from 'theme/ThemeProvider';
import { List, ListItem } from '..';

beforeEach(() => {
  mount(
    <ThemeProvider>
      <List>
        <ListItem data-cy="list-item">Example item 1</ListItem>
        <ListItem data-cy="list-item">Example item 2</ListItem>
      </List>
    </ThemeProvider>,
  );
});

describe('ListItem', () => {
  it('should render two LisItems', () => {
    cy.get('[data-cy=list-item').should('have.length', 2);
    cy.get('[data-cy=list-item').should('not.have.length', 3);
  });

  it('should contains inner texts', () => {
    cy.get('[data-cy=list-item').contains('Example item 1');
    cy.get('[data-cy=list-item').contains('Example item 2');
    cy.get('[data-cy=list-item').should('not.contain.text', 'Example item 3');
  });
});

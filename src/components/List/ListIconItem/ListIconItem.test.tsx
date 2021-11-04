import React from 'react';
import { mount } from '@cypress/react';

import { ThemeProvider } from 'src/theme/ThemeProvider';
import { List, ListIconItem } from '..';

beforeEach(() => {
  mount(
    <ThemeProvider>
      <List>
        <ListIconItem data-cy="list-icon-item">Example item 1</ListIconItem>
        <ListIconItem data-cy="list-icon-item">Example item 2</ListIconItem>
        <ListIconItem data-cy="list-icon-item">Example item 3</ListIconItem>
      </List>
    </ThemeProvider>,
  );
});

describe('ListIconItem', () => {
  it('should render three ListIconItems', () => {
    cy.get('[data-cy=list-icon-item').should('have.length', 3);
  });

  it('should contains inner texts', () => {
    cy.get('[data-cy=list-icon-item').contains('Example item 1');
    cy.get('[data-cy=list-icon-item').contains('Example item 2');
    cy.get('[data-cy=list-icon-item').contains('Example item 3');
  });
});

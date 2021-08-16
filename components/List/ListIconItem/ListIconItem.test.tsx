import React from 'react';
import { mount } from '@cypress/react';

import { ThemeProvider } from 'theme/ThemeProvider';
import { List, ListIconItem } from '..';

beforeEach(() => {
  mount(
    <ThemeProvider>
      <List>
        <ListIconItem data-cy="list-icon-item" type="check">
          Example item 1
        </ListIconItem>
        <ListIconItem data-cy="list-icon-item" type="error">
          Example item 2
        </ListIconItem>
        <ListIconItem data-cy="list-icon-item" type="info">
          Example item 3
        </ListIconItem>
      </List>
    </ThemeProvider>,
  );
});

describe('ListIconItem', () => {
  it('should render three ListIconItems', () => {
    cy.get('[data-cy=list-icon-item').should('have.length', 3);
  });

  it('should render with "info" type', () => {
    cy.get('[type=info]').should('have.length', 1);
    cy.get('[type=info]').should('not.have.length', 3);
  });

  it('should render with "error" type', () => {
    cy.get('[type=error]').should('have.length', 1);
    cy.get('[type=error]').should('not.have.length', 3);
  });

  it('should render with "info" type', () => {
    cy.get('[type=check]').should('have.length', 1);
    cy.get('[type=check]').should('not.have.length', 3);
  });

  it('should contains inner texts', () => {
    cy.get('[data-cy=list-icon-item').contains('Example item 1');
    cy.get('[data-cy=list-icon-item').contains('Example item 2');
    cy.get('[data-cy=list-icon-item').contains('Example item 3');
  });
});

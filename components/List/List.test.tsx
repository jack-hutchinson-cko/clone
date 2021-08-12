import React from 'react';
import { mount } from '@cypress/react';

import { ThemeProvider } from 'theme/ThemeProvider';
import { List, OrderedList, UnorderedList, ListItem } from '.';

describe('List', () => {
  beforeEach(() => {
    mount(
      <ThemeProvider>
        <List data-cy="list">
          <ListItem data-cy="list-item">Example text 1</ListItem>
        </List>
      </ThemeProvider>,
    );
  });

  it('should render List component', () => {
    cy.get('[data-cy=list]').should('exist');
  });

  it('should render inner ListItem component', () => {
    cy.get('[data-cy=list-item]').should('exist');
    cy.get('[data-cy=list-item]').contains('Example text 1');
  });

  it('children should not have a list-type', () => {
    cy.get('[data-cy=list-item]').should('have.css', 'list-style-type', 'none');
  });
});

describe('OrderedList', () => {
  beforeEach(() => {
    mount(
      <ThemeProvider>
        <OrderedList data-cy="ordered-list">
          <ListItem data-cy="list-item">Example text 1</ListItem>
        </OrderedList>
      </ThemeProvider>,
    );
  });

  it('should render OrderedList component', () => {
    cy.get('[data-cy=ordered-list]').should('exist');
  });

  it('should render inner ListItem component', () => {
    cy.get('[data-cy=list-item]').should('exist');
    cy.get('[data-cy=list-item]').contains('Example text 1');
  });

  it('children should be decimal list-type', () => {
    cy.get('[data-cy=list-item]').should('have.css', 'list-style-type', 'decimal');
  });
});

describe('UnorderedList', () => {
  beforeEach(() => {
    mount(
      <ThemeProvider>
        <UnorderedList data-cy="unordered-list">
          <ListItem data-cy="list-item">Example text 1</ListItem>
        </UnorderedList>
      </ThemeProvider>,
    );
  });

  it('should render UnorderedList component', () => {
    cy.get('[data-cy=unordered-list]').should('exist');
  });

  it('should render inner ListItem component', () => {
    cy.get('[data-cy=list-item]').should('exist');
    cy.get('[data-cy=list-item]').contains('Example text 1');
  });

  it('children should be disc list-type', () => {
    cy.get('[data-cy=list-item]').should('have.css', 'list-style-type', 'disc');
  });
});

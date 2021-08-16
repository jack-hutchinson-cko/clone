import { mount } from '@cypress/react';

import { withThemeWrapper } from 'tools/testing';
import BreadCrumbs from './BreadCrumbs';

describe('BreadCrumbs', () => {
  it('Default rendering', () => {
    const breadCrumbsItem: { name: string; url: string }[] = [
      { name: 'Test1', url: 'test1' },
      { name: 'Test2', url: 'test1/test2' },
      { name: 'Test3', url: 'test1/test2/test3' },
    ];
    mount(
      withThemeWrapper(<BreadCrumbs data-cy="breadcrumbs" breadCrumbsItem={breadCrumbsItem} />),
    );

    cy.get('*[data-cy=breadcrumbs]').children().should('have.length', 3);

    cy.get('*[data-cy=breadcrumbs]').children().eq(0).contains('Test1').and('not.contain', '/');
    cy.get('*[data-cy=breadcrumbs]')
      .children()
      .eq(0)
      .find('a')
      .invoke('attr', 'href')
      .should('eq', '/test1');

    cy.get('*[data-cy=breadcrumbs]').children().eq(1).contains('Test2');
    cy.get('*[data-cy=breadcrumbs]')
      .children()
      .eq(1)
      .find('a')
      .invoke('attr', 'href')
      .should('eq', '/test1/test2');

    cy.get('*[data-cy=breadcrumbs]').children().eq(2).contains('Test3');
    cy.get('*[data-cy=breadcrumbs]')
      .children()
      .eq(2)
      .find('a')
      .invoke('attr', 'href')
      .should('eq', '/test1/test2/test3');
  });
});

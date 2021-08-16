import { mount } from '@cypress/react';

import { withThemeWrapper } from 'tools/testing';
import NavigationTreeMenu from './NavigationTreeMenu';

describe('NavigationTreeMenu', () => {
  it('Check content', () => {
    mount(
      withThemeWrapper(
        <NavigationTreeMenu data-cy="navigation-tree-menu">Test content</NavigationTreeMenu>,
      ),
    );

    cy.get('*[data-cy=navigation-tree-menu]').should('have.length', 1);
    cy.get('*[data-cy=navigation-tree-menu]').children().should('have.length', 1);
    cy.get('*[data-cy=navigation-tree-menu]').children().first().should('contain', 'Test content');
  });

  it('Check additional links', () => {
    mount(
      withThemeWrapper(
        <NavigationTreeMenu
          data-cy="navigation-tree-menu"
          topLinks={<div className="top-links">Top links</div>}
        >
          Test content
        </NavigationTreeMenu>,
      ),
    );

    cy.get('*[data-cy=navigation-tree-menu]').should('have.length', 1);
    cy.get('*[data-cy=navigation-tree-menu]').children().should('have.length', 2);
    cy.get('*[data-cy=navigation-tree-menu]')
      .children()
      .eq(0)
      .children()
      .eq(0)
      .should('have.class', 'top-links')
      .and('contain', 'Top links');
    cy.get('*[data-cy=navigation-tree-menu]').children().eq(1).should('contain', 'Test content');
  });
});

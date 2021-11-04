import { mount } from '@cypress/react';

import { withThemeWrapper } from 'tools/testing';
import Card from './Card';

describe('Card', () => {
  it("'Default' mode rendering", () => {
    mount(
      withThemeWrapper(
        <Card data-cy="card" title="Test title" href="www.test.com">
          Card text
        </Card>,
      ),
    );

    cy.get('*[data-cy=card]').children().should('have.length', 3);
    cy.get('*[data-cy=card]').children().eq(0).should('contain', 'Test title');
    cy.get('*[data-cy=card]').children().eq(1).should('contain', 'Card text');
    cy.get('*[data-cy=card]').children().eq(2).invoke('prop', 'tagName').should('eq', 'svg');
  });
});

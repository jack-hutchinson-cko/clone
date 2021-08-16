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

  it("'Media' mode", () => {
    mount(
      withThemeWrapper(
        <Card data-cy="card" variant="media" href="www.test.com" title="Test title">
          Card text
        </Card>,
      ),
    );

    cy.get('*[data-cy=card]').children().should('have.length', 3);
    cy.get('*[data-cy=card]').children().eq(0).find('*[alt]').should('have.length', 1);

    cy.get('*[data-cy=card]').children().eq(1).invoke('prop', 'tagName').should('eq', 'H3');
    cy.get('*[data-cy=card]').children().eq(1).should('contain', 'Test title');

    cy.get('*[data-cy=card]').children().eq(2).invoke('prop', 'tagName').should('eq', 'P');
    cy.get('*[data-cy=card]').children().eq(2).should('contain', 'Card text');
  });

  it("'Media' mode with anchors", () => {
    mount(
      withThemeWrapper(
        <Card data-cy="card" variant="media" href="www.test.com" title="Test title" withAnchor>
          Card text
        </Card>,
      ),
    );

    cy.get('*[data-cy=card]').children().should('have.length', 4);

    cy.get('*[data-cy=card]').children().eq(1).invoke('prop', 'tagName').should('eq', 'SPAN');
    cy.get('*[data-cy=card]').children().eq(1).invoke('attr', 'id').should('eq', 'Test_title');

    cy.get('*[data-cy=card]').children().eq(2).should('contain', 'Test title');
    cy.get('*[data-cy=card]').children().eq(2).find('svg').should('have.length', 1);
  });
});

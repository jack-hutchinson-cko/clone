import { mount } from '@cypress/react';

import { withThemeWrapper } from 'tools/testing';

import TipBox from './TipBox';

describe('Switch', () => {
  it('Check content', () => {
    mount(withThemeWrapper(<TipBox data-cy="tip-box">TipBox content</TipBox>));

    cy.get('*[data-cy=tip-box]').children().should('have.length', 2);
    cy.get('*[data-cy=tip-box]').children().eq(1).should('contain', 'TipBox content');
  });

  it('With title', () => {
    mount(
      withThemeWrapper(
        <TipBox data-cy="tip-box" title="Test title 777">
          TipBox content
        </TipBox>,
      ),
    );

    cy.get('*[data-cy=tip-box]').children().should('have.length', 3);
    cy.get('*[data-cy=tip-box]').children().eq(1).should('contain', 'Test title 777');
    cy.get('*[data-cy=tip-box]').children().eq(2).should('contain', 'TipBox content');
  });
});

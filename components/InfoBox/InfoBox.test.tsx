import { mount } from '@cypress/react';

import { withThemeWrapper } from 'tools/testing';
import InfoBox from './InfoBox';

describe('InfoBox', () => {
  it('Default render', () => {
    mount(withThemeWrapper(<InfoBox data-cy="info-box">Test content</InfoBox>));

    cy.get('*[data-cy=info-box]').children().should('have.length', 2);
    cy.get('*[data-cy=info-box]').children().eq(0).invoke('prop', 'tagName').should('eq', 'svg');
    cy.get('*[data-cy=info-box]').children().eq(1).invoke('prop', 'tagName').should('eq', 'DIV');
    cy.get('*[data-cy=info-box]').children().eq(1).should('contain', 'Test content');
  });

  it('Render without icon', () => {
    mount(
      withThemeWrapper(
        <InfoBox data-cy="info-box" showIcon={false}>
          Test content
        </InfoBox>,
      ),
    );

    cy.get('*[data-cy=info-box]').children().should('have.length', 1);
    cy.get('*[data-cy=info-box]').children().eq(0).invoke('prop', 'tagName').should('eq', 'DIV');
    cy.get('*[data-cy=info-box]').children().eq(0).should('contain', 'Test content');
  });
});

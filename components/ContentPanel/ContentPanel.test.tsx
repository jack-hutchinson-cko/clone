import { mount } from '@cypress/react';

import { withThemeWrapper } from 'tools/testing';
import ContentPanel from './ContentPanel';

const testImgUrl = '/docs/Integrate/SDKs/prestashop-logo.svg';

describe('ContentPanel', () => {
  it('Default render', () => {
    mount(
      withThemeWrapper(
        <ContentPanel imgSrc={testImgUrl} data-cy="content-panel">
          Test content
        </ContentPanel>,
      ),
    );

    cy.get('*[data-cy=content-panel]').children().should('have.length', 2);
    cy.get('*[data-cy=content-panel]').children().eq(1).should('contain', 'Test content');
  });

  it('Render title', () => {
    mount(
      withThemeWrapper(
        <ContentPanel data-cy="content-panel" imgSrc={testImgUrl} title="My test title">
          Test content2
        </ContentPanel>,
      ),
    );

    cy.get('*[data-cy=content-panel]').children().should('have.length', 2);
    cy.get('*[data-cy=content-panel]').children().eq(1).children().should('have.length', 1);
    cy.get('*[data-cy=content-panel]')
      .children()
      .eq(1)
      .children()
      .eq(0)
      .should('contain', 'My test title');
    cy.get('*[data-cy=content-panel]').children().eq(1).should('contain', 'Test content2');
  });

  it('Custom image size', () => {
    mount(
      withThemeWrapper(<ContentPanel data-cy="content-panel" imgSrc={testImgUrl} imgWidth={75} />),
    );

    cy.get('*[data-cy=content-panel]').children().first().should('have.css', 'width', `${75}px`);
  });
});

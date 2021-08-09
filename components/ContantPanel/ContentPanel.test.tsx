import { mount } from '@cypress/react';

import { convertSVGToImageUrl, withThemeWrapper } from 'tools/testing';
import ContentPanel from './ContentPanel';

const testImgUrl = convertSVGToImageUrl(`
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
         <circle cx="25" cy="25" r="20"/>
      </svg>
    `);

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
    cy.get('*[data-cy=content-panel]').children().eq(0).find('svg').should('have.length', 1);
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

  it('Render image alt', () => {
    mount(
      withThemeWrapper(
        <ContentPanel data-cy="content-panel" imgSrc={testImgUrl} imgAlt="My image alt" />,
      ),
    );

    cy.get('*[data-cy=content-panel]').get('svg').should('have.length', 1);
    cy.get('*[data-cy=content-panel]')
      .get('svg')
      .parent()
      .parent()
      .invoke('attr', 'alt')
      .should('eq', 'My image alt');
  });

  it('Custom image size', () => {
    mount(
      withThemeWrapper(<ContentPanel data-cy="content-panel" imgSrc={testImgUrl} imgWidth={75} />),
    );

    cy.get('*[data-cy=content-panel]').children().first().should('have.css', 'width', `${75}px`);
  });
});

import { mount } from '@cypress/react';

import { withThemeWrapper } from 'tools/testing';
import ListMenu from './ListMenu';

const staticLinksData: [string, string][] = [
  ['Home', '/docs'],
  ["What's New", '/docs/whats-new'],
];

describe('ListMenu', () => {
  it('Check static links', () => {
    mount(withThemeWrapper(<ListMenu activeLink="/" docsTreeLinks={[]} />));

    staticLinksData.forEach(([title, href]) => {
      cy.contains(title).should('have.length', 1).should('have.attr', 'href', href);
    });
  });

  it('Check active links', () => {
    mount(withThemeWrapper(<ListMenu activeLink="/" docsTreeLinks={[]} />));

    staticLinksData.forEach(([title]) => {
      cy.contains(title)
        .should('have.length', 1)
        .children()
        .first()
        .should('have.prop', 'tagName', 'MARK')
        .and('not.have.css', 'background', 'transparent');
    });
  });
});

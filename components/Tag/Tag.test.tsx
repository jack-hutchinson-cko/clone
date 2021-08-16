import { mount } from '@cypress/react';

import { withThemeWrapper } from 'tools/testing';
import { StatusTagWrapper } from './StatusTag/StatusTag.styles';
import { StyledSectionTag } from './SectionTag/SectionTag.styles';
import { StyledTypeTag } from './TypeTag/TypeTag.styles';
import { RequestTag, StatusTag, TypeTag, SectionTag } from './Tag';

describe('Tag', () => {
  it('Check request tag', () => {
    mount(withThemeWrapper(<RequestTag type="patch" />));

    cy.get(`div`).find(`span`).invoke('attr', 'type').should('eq', 'patch');
  });

  it('Check satus tag', () => {
    mount(withThemeWrapper(<StatusTag type="optional" />));

    cy.get(`${StatusTagWrapper}`).find('span').should('have.attr', 'type', 'optional');
  });

  it('Check type tag', () => {
    mount(withThemeWrapper(<TypeTag type="string" />));

    cy.get(`${StyledTypeTag}`).invoke('attr', 'type').should('eq', 'string');
  });

  it('Check section tag', () => {
    mount(withThemeWrapper(<SectionTag title="test title" url="/test" />));

    cy.get(`${StyledSectionTag}`).children().should('have.length', 1);
    cy.get(`${StyledSectionTag}`).find('a').invoke('attr', 'href').should('eq', '/test');
    cy.get(`${StyledSectionTag}`).children().eq(0).should('contain', 'test title');
  });
});

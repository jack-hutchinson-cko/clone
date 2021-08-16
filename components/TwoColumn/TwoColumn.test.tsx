import { mount } from '@cypress/react';

import { withThemeWrapper } from 'tools/testing';
import { Layout } from './TwoColumn.styles';
import TwoColumn from './TwoColumn';

describe('TwoColumn', () => {
  it('Check two column', () => {
    mount(
      withThemeWrapper(
        <TwoColumn gap={15} columSize={{ desktop: [50, 50] }}>
          <div>test content 1</div>
          <div>test content 2</div>
          <div>test content 3</div>
        </TwoColumn>,
      ),
    );

    cy.get(`${Layout}`).invoke('prop', 'tagName').should('eq', 'DIV');
    cy.get(`${Layout}`).children().should('have.length', 2);
    cy.get(`${Layout}`).should('have.css', 'gap').should('eq', '15px');
    cy.get(`${Layout}`).children().eq(0).should('contain', 'test content 1');
    cy.get(`${Layout}`).children().eq(1).invoke('attr', 'width').should('eq', '50');
  });

  it('Check width column', () => {
    mount(
      withThemeWrapper(
        <div style={{ width: '500px' }}>
          <TwoColumn gap={10} columSize={{ desktop: [51, 50] }}>
            <div>test content 1</div>
            <div>test content 2</div>
          </TwoColumn>
        </div>,
      ),
    );

    cy.get(`${Layout}`).children().eq(0).should('have.css', 'width').should('contain', '255px');
  });
});

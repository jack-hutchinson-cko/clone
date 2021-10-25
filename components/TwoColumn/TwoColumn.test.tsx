import { mount } from '@cypress/react';

import { withThemeWrapper } from 'tools/testing';
import { Layout } from './TwoColumn.styles';
import TwoColumn from './TwoColumn';

describe('TwoColumn', () => {
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

import { mount } from '@cypress/react';

import { withThemeWrapper } from 'tools/testing';
import Iframe from './Iframe';

describe('Iframe', () => {
  it('Passing props', () => {
    mount(
      withThemeWrapper(
        <Iframe data-cy="iframe" title="Hello world!" src="https://www.hello-world.com" />,
      ),
    );

    cy.get('*[data-cy=iframe]').invoke('attr', 'src').should('eq', 'https://www.hello-world.com');
    cy.get('*[data-cy=iframe]').invoke('attr', 'title').should('eq', 'Hello world!');
  });
});

import { mount } from '@cypress/react';

import { withThemeWrapper } from 'tools/testing';
import Button from './ButtonLink';

describe('ButtonLink', () => {
  it('Default rendering', () => {
    mount(
      withThemeWrapper(
        <Button data-cy="button-link" href="www.test.com">
          Test button
        </Button>,
      ),
    );

    cy.get('*[data-cy=button-link]').contains('Test button');
  });
});

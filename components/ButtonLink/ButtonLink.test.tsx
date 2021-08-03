import * as React from 'react';
import { mount } from '@cypress/react';

import { ThemeProvider } from 'theme/ThemeProvider';
import Button, { Props } from './ButtonLink';

const setup = (props: Props) => (
  <ThemeProvider>
    <Button {...props} />
  </ThemeProvider>
);

describe('ButtonLink', () => {
  it('Button', () => {
    mount(
      setup({
        href: 'www.test.com',
        children: 'Test button',
      }),
    );

    cy.get('button').contains('Test button');
  });
});

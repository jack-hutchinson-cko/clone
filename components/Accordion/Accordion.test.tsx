import * as React from 'react';
import { mount } from '@cypress/react';

import { ThemeProvider } from 'theme/ThemeProvider';

const setup = (text: string) => (
  <ThemeProvider>
    <div>{text}</div>
  </ThemeProvider>
);

describe('ButtonLink', () => {
  it('Button', () => {
    mount(setup('Test button'));

    cy.get('div').contains('Test button');
  });
});

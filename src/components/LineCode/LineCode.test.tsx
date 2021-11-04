import React from 'react';
import { mount } from '@cypress/react';

import { ThemeProvider } from 'src/theme/ThemeProvider';
import { LineCode } from './LineCode.styles';

beforeEach(() => {
  mount(
    <ThemeProvider>
      <LineCode data-cy="line-code">Example text</LineCode>
    </ThemeProvider>,
  );
});

describe('LineCode', () => {
  it('should render inner text', () => {
    cy.get('[data-cy=line-code]').contains('Example text');
  });
});

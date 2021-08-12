import React, { FC } from 'react';
import { mount } from '@cypress/react';

import { ThemeProvider } from 'theme/ThemeProvider';
import { RequestTagProps } from 'components/Tag/types';
import LineCodeWrapper from '.';

const setup: FC<RequestTagProps> = ({ type }) => (
  <ThemeProvider>
    <LineCodeWrapper data-cy="line-code-wrapper" type={type}>
      Example text
    </LineCodeWrapper>
  </ThemeProvider>
);

describe('LineCodeWrapper', () => {
  it('should render inner text', () => {
    mount(setup({ type: 'post' }));

    cy.get('[data-cy=line-code-wrapper]').contains('Example text');
  });

  it('should render with POST status', () => {
    mount(setup({ type: 'post' }));

    cy.get('[type="post"]').should('exist');
  });

  it('should render with GET status', () => {
    mount(setup({ type: 'get' }));

    cy.get('[type="get"]').should('exist');
  });

  it('should render with PUT status', () => {
    mount(setup({ type: 'put' }));

    cy.get('[type="put"]').should('exist');
  });

  it('should render with PATCH status', () => {
    mount(setup({ type: 'patch' }));

    cy.get('[type="patch"]').should('exist');
  });

  it('should render with DELETE status', () => {
    mount(setup({ type: 'delete' }));

    cy.get('[type="delete"]').should('exist');
  });
});

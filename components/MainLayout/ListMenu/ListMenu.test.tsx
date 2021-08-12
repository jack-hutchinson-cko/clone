import React from 'react';
import { mount } from '@cypress/react';

import { ThemeProvider } from 'theme/ThemeProvider';
import ListMenu from './ListMenu';

const mockProps = {
  activeLink: '/section1',
  docsTreeLinks: [
    { id: '1', title: 'Section 1', path: '/section1' },
    { id: '3', title: 'Section 3', path: '/section3' },
    {
      id: '2',
      title: 'Section 2',
      path: '/section2',
      children: [
        { id: '4', title: 'Link 1', path: '/section2/link-1' },
        {
          id: '5',
          title: 'Link 2',
          path: '/section2/link-1',
          children: [
            { id: '6', title: 'Link 3', path: '/section2/link-1/link-3' },
            { id: '7', title: 'Link 4', path: '/section2/link-1/link-4' },
          ],
        },
      ],
    },
  ],
};

beforeEach(() => {
  mount(
    <ThemeProvider>
      <ListMenu data-cy="list-menu" {...mockProps} />
    </ThemeProvider>,
  );
});

// TODO: add more tests
describe('ListMenu', () => {
  it('should render ListMenu wrapper', () => {
    cy.get('[data-cy=list-menu]').should('exist');
  });
});

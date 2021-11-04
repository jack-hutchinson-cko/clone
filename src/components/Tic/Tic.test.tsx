import { mount } from '@cypress/react';

import { ReactNode } from 'react';
import { withThemeWrapper } from 'tools/testing';

import Tic from './Tic';

type TestTikType = 'check' | 'error' | 'info';

describe('Tic', () => {
  it('Check tik types', () => {
    const types: TestTikType[] = ['check', 'error', 'info'];
    mount(
      withThemeWrapper(
        <>
          {types.map(
            (tick: TestTikType): ReactNode => (
              <Tic key={tick} type={tick} />
            ),
          )}
        </>,
      ),
    );

    cy.get('*[data-tick-type]').should('have.length', 3);
    cy.get('*[data-tick-type]').each((el, index) => {
      cy.wrap(el).should('have.attr', 'data-tick-type', types[index]);
    });
  });
});

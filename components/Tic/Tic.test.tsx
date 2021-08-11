import { mount } from '@cypress/react';

import { ReactNode } from 'react';
import { withThemeWrapper } from 'tools/testing';

import Tic from './Tic';

type TestTikType = 'check' | 'error' | 'info' | 'decimal';

describe('Tic', () => {
  it('Check tik types', () => {
    const types: TestTikType[] = ['check', 'error', 'info', 'decimal'];
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

    cy.get('*[data-tick-type]').should('have.length', 4);
    cy.get('*[data-tick-type]').each((el, index) => {
      cy.wrap(el).should('have.attr', 'data-tick-type', types[index]);
    });
  });

  it('Check tik type "decimal" with number', () => {
    mount(withThemeWrapper(<Tic type="decimal" number={66} />));

    cy.contains('66').should('have.attr', 'data-tick-type', 'decimal');
  });
});

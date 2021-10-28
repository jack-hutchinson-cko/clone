import { mount } from '@cypress/react';

import { ReactNode } from 'react';
import { withThemeWrapper } from 'tools/testing';

import { TableHead, TableSubhead, TableTicCell } from './Table';

type TestTikType = 'check' | 'error';

describe('TableHead', () => {
  it('Render columns', () => {
    const headers = ['asd', 'asd2', 'asd3', 'asd4'];
    mount(withThemeWrapper(<TableHead data-cy="table-head" headers={headers} />));

    cy.get('thead').children().should('have.length', 1);
    cy.get('thead').find('tr').should('have.length', 1);

    cy.get('thead').find('tr').children().should('have.length', 4);
    cy.get('thead')
      .find('tr')
      .children()
      .each((el, index) => {
        cy.wrap(el).should('contain', headers[index]);
      });
  });

  it('Custom column sizes', () => {
    const headers = ['asd', 'asd2', 'asd3', 'asd4'];
    const sizes = ['100px', '250px'];
    mount(withThemeWrapper(<TableHead data-cy="table-head" headers={headers} sizes={sizes} />));

    cy.get('thead').find('tr').children().should('have.length', 4);
    cy.get('thead')
      .find('tr')
      .children()
      .each((el, index) => {
        if (sizes[index]) {
          cy.wrap(el).should('have.css', 'width', sizes[index]);
        }
      });
  });
});

describe('TableSubhead', () => {
  it('Check content', () => {
    mount(withThemeWrapper(<TableSubhead>Subhead content</TableSubhead>));

    cy.get('tr').children().first().invoke('prop', 'tagName').should('eq', 'TD');
    cy.get('tr').children().first().should('contain', 'Subhead content');
  });

  it('Check colspan', () => {
    mount(withThemeWrapper(<TableSubhead colspan={2}>Subhead content</TableSubhead>));
    cy.get('tr > td').should('have.attr', 'colspan', '2');
  });

  it('Check color', () => {
    mount(withThemeWrapper(<TableSubhead color="grey">Subhead content</TableSubhead>));
    cy.get('tr').find('td').should('have.css', 'background-color', 'rgb(206, 207, 217)');
  });
});

describe('TableTicCell', () => {
  it('Check content', () => {
    mount(
      withThemeWrapper(
        <TableTicCell data-cy="tic-cell">
          <p>TicCell content</p>
        </TableTicCell>,
      ),
    );

    cy.get('*[data-cy=tic-cell]').children().should('have.length', 2);
    cy.get('*[data-cy=tic-cell]').children().eq(1).should('contain', 'TicCell content');
  });

  it('Check tik types', () => {
    const tickTypes: TestTikType[] = ['check', 'error'];
    mount(
      withThemeWrapper(
        <>
          {tickTypes.map(
            (tick: TestTikType): ReactNode => (
              <TableTicCell key={tick} data-cy="tic-cell" type={tick}>
                <p>TicCell content</p>
              </TableTicCell>
            ),
          )}
        </>,
      ),
    );

    cy.get('*[data-cy=tic-cell]').should('have.length', 2);
    cy.get('*[data-cy=tic-cell]').each((el, index) => {
      cy.wrap(el).children().eq(0).should('have.attr', 'data-tick-type', tickTypes[index]);
    });
  });
});

import { mount } from '@cypress/react';

import { withThemeWrapper } from 'tools/testing';

import Switch from './Switch';

describe('Switch', () => {
  it('Turned off', () => {
    mount(withThemeWrapper(<Switch data-cy="switch" onChange={() => {}} />));

    cy.get('*[data-cy=switch]').children().should('have.length', 3);
    cy.get('*[data-cy=switch]').children().eq(0).should('be.empty');
    cy.get('*[data-cy=switch]').children().eq(1).should('be.empty');
    cy.get('*[data-cy=switch]').children().eq(2).should('have.css', 'transform', 'none');

    cy.get('*[data-cy=switch]')
      .children()
      .eq(2)
      .find('input[type=checkbox]')
      .should('have.prop', 'disabled', false);
  });

  // This test is commented out because the dark theme is not ready yet and it was decided to hide the switcher until then.
  // it('Turned on', () => {
  //   mount(withThemeWrapper(<Switch data-cy="switch" checked onChange={() => {}} />));

  //   cy.get('*[data-cy=switch]').children().should('have.length', 3);
  //   cy.get('*[data-cy=switch]').children().eq(0).should('be.empty');
  //   cy.get('*[data-cy=switch]').children().eq(1).should('be.empty');
  //   cy.get('*[data-cy=switch]')
  //     .children()
  //     .eq(2)
  //     .should('have.css', 'transform', 'matrix(1, 0, 0, 1, 24, 0)');

  //   cy.get('*[data-cy=switch]')
  //     .children()
  //     .eq(2)
  //     .find('input[type=checkbox]')
  //     .should('have.prop', 'disabled', false);
  // });

  it('Disabled', () => {
    mount(withThemeWrapper(<Switch data-cy="switch" disabled onChange={() => {}} />));

    cy.get('*[data-cy=switch]').children().should('have.length', 3);
    cy.get('*[data-cy=switch]').children().eq(0).should('be.empty');
    cy.get('*[data-cy=switch]').children().eq(1).should('be.empty');

    cy.get('*[data-cy=switch]')
      .children()
      .eq(2)
      .find('input[type=checkbox]')
      .should('have.prop', 'disabled', true);
  });

  it('Check icons', () => {
    mount(
      withThemeWrapper(
        <Switch
          data-cy="switch"
          icon={<span className="test-icon" />}
          checkedIcon={<span className="test-checked-icon" />}
          onChange={() => {}}
        />,
      ),
    );

    cy.get('*[data-cy=switch]').children().should('have.length', 3);
    cy.get('*[data-cy=switch]').children().eq(0).should('not.be.empty');
    cy.get('*[data-cy=switch]')
      .children()
      .eq(0)
      .children()
      .first()
      .should('have.attr', 'class', 'test-checked-icon');
    cy.get('*[data-cy=switch]').children().eq(1).should('not.be.empty');
    cy.get('*[data-cy=switch]')
      .children()
      .eq(1)
      .children()
      .first()
      .should('have.attr', 'class', 'test-icon');
  });

  // This test is commented out because the dark theme is not ready yet and it was decided to hide the switcher until then.
  // it('Check toggling', () => {
  //   const callback = cy.stub();
  //   mount(
  //     withThemeWrapper(
  //       <Switch
  //         data-cy="switch"
  //         icon={<span className="test-icon" />}
  //         checkedIcon={<span className="test-checked-icon" />}
  //         onChange={callback}
  //       />,
  //     ),
  //   );

  //   cy.get('*[data-cy=switch]').children().eq(2).should('have.css', 'transform', 'none');

  //   cy.get('*[data-cy=switch]')
  //     .click()
  //     .then(() => {
  //       expect(callback).to.have.been.callCount(1);
  //       cy.get('*[data-cy=switch]')
  //         .children()
  //         .eq(2)
  //         .should('have.css', 'transform', 'matrix(1, 0, 0, 1, 24, 0)');
  //     })
  //     .click()
  //     .then(() => {
  //       expect(callback).to.have.been.callCount(2);
  //       cy.get('*[data-cy=switch]').children().eq(2).should('have.css', 'transform', 'none');
  //     });
  // });
});

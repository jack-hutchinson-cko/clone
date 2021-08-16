import { mount } from '@cypress/react';

import { withThemeWrapper } from 'tools/testing';
import AccordionHead from './AccordionHead';
import AccordionBody from './AccordionBody';

describe('Accordion', () => {
  describe('AccordionHead', () => {
    it('Elements default rendering', () => {
      mount(withThemeWrapper(<AccordionHead data-cy="accordion">Test title</AccordionHead>));

      cy.get('*[data-cy=accordion]').children().should('have.length', 2);
      cy.get('*[data-cy=accordion]').children().eq(0).type('div').contains('Test title');
      cy.get('*[data-cy=accordion]').children().eq(1).type('span').find('svg');
    });

    it('Check default icon position', () => {
      mount(withThemeWrapper(<AccordionHead data-cy="accordion">Test title</AccordionHead>));

      cy.get('*[data-cy=accordion]').find('svg').should('have.length', 1);
      cy.get('*[data-cy=accordion]')
        .find('svg')
        .should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)');
    });

    it('Check rotated icon position', () => {
      mount(
        withThemeWrapper(
          <AccordionHead data-cy="accordion" isOpen>
            Test title
          </AccordionHead>,
        ),
      );

      cy.get('*[data-cy=accordion]').find('svg').should('have.length', 1);
      cy.get('*[data-cy=accordion]')
        .find('svg')
        .should('have.css', 'transform', 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)');
    });

    it('Check opening trigger', () => {
      const callback = cy.stub();
      mount(
        withThemeWrapper(
          <AccordionHead data-cy="accordion" isOpen setOpen={callback}>
            Test title
          </AccordionHead>,
        ),
      );

      cy.get('*[data-cy=accordion]')
        .click()
        .then(() => {
          expect(callback).to.have.been.callCount(1);
          expect(callback).to.have.been.calledWith(false);
        });
    });

    it('Check opening trigger (icon click only)', () => {
      const callback = cy.stub();
      mount(
        withThemeWrapper(
          <AccordionHead data-cy="accordion" clickableTitle={false} setOpen={callback}>
            Test title
          </AccordionHead>,
        ),
      );

      cy.get('*[data-cy=accordion]')
        .click()
        .then(() => {
          expect(callback).to.have.been.callCount(0);
        });

      cy.get('*[data-cy=accordion]')
        .find('svg')
        .click()
        .then(() => {
          expect(callback).to.have.been.callCount(1);
          expect(callback).to.have.been.calledWith(true);
        });
    });
  });
  describe('AccordionBody', () => {
    it('Elements default rendering (hidden)', () => {
      mount(
        withThemeWrapper(
          <AccordionBody data-cy="accordion">
            <p data-cy="test-content">Test Content 111</p>
          </AccordionBody>,
        ),
      );

      cy.get('*[data-cy=accordion]').should('not.be', 'visible');
      cy.get('*[data-cy=accordion]')
        .find('p[data-cy=test-content]')
        .should('have.length', 1)
        .and('contain', 'Test Content 111');
    });
    it('Elements are visible', () => {
      mount(
        withThemeWrapper(
          <AccordionBody data-cy="accordion" isOpen>
            <p data-cy="test-content">Test Content 111</p>
          </AccordionBody>,
        ),
      );

      cy.get('*[data-cy=accordion]').should('to.be', 'visible');
      cy.get('*[data-cy=accordion]')
        .find('p[data-cy=test-content]')
        .should('have.length', 1)
        .and('contain', 'Test Content 111');
    });
  });
});

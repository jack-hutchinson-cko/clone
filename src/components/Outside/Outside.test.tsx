import { mount } from '@cypress/react';

import Outside from './Outside';

type EventHandler = (e: MouseEvent) => void;

const testElement = (callback: EventHandler) => (
  <div className="root-element">
    <Outside onOutsideClick={callback}>
      {(ref) => (
        <div ref={ref} className="child-element">
          Child content
        </div>
      )}
    </Outside>
  </div>
);

describe('NavigationTree', () => {
  it('Should be without additional wrapper', () => {
    mount(testElement(() => {}));

    cy.get('.root-element').children().should('have.length', 1);
    cy.get('.root-element').children().first().should('have.class', 'child-element');
  });

  it('Check click on outer elements', () => {
    const callback = cy.stub();
    mount(testElement(callback));

    cy.get('.root-element')
      .click({ force: true })
      .then(() => {
        expect(callback).to.have.been.callCount(1);
      });
  });

  it('Check click on inner elements', () => {
    const callback = cy.stub();
    mount(testElement(callback));

    cy.get('.child-element')
      .click()
      .then(() => {
        expect(callback).to.have.been.callCount(0);
      });
  });
});

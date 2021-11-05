import { mount } from '@cypress/react';

import { withThemeWrapper } from 'tools/testing';

import SelectBody from './SelectBody';
import SelectHead from './SelectHead';

describe('SelectHead', () => {
  it('Render titles', () => {
    const titles = ['title 1', 'title 2', 'title 3'];
    mount(
      withThemeWrapper(
        <SelectHead data-cy="select-head" titles={titles} setActiveTab={() => {}} />,
      ),
    );

    cy.get('*[data-cy=select-head]').children().should('have.length', 2);
    cy.get('*[data-cy=select-head]')
      .children()
      .first()
      .each((el, index) => {
        cy.wrap(el).children().should('contain', titles[index]).and('have.attr', 'value', index);
        cy.wrap(el).children().invoke('prop', 'tagName').should('eq', 'OPTION');
      });
  });

  it('Check active option', () => {
    const titles = ['title 1', 'title 2', 'title 3'];
    const activeTabIndex = 1;
    const callback = cy.stub();
    mount(
      withThemeWrapper(
        <SelectHead data-cy="select-head" titles={titles} setActiveTab={callback} />,
      ),
    );

    cy.get('*[data-cy=select-head]')
      .children()
      .first()
      .each((el, index) => {
        cy.wrap(el).children().should('have.attr', 'value', index).eq(activeTabIndex);
      });
  });
});

describe('SelectBody', () => {
  it('Empty render', () => {
    mount(withThemeWrapper(<SelectBody />));
    cy.contains('Empty');
  });

  it('Active option render', () => {
    const children = ['Child 1', 'Child 2', 'Child 3'];
    const activeTab = 1;
    mount(
      withThemeWrapper(
        <SelectBody data-cy="select-body" activeTab={activeTab}>
          {children.map((child) => (
            <div key={child} data-child-cy="true">
              {child}
            </div>
          ))}
        </SelectBody>,
      ),
    );

    cy.get('*[data-child-cy]').should('have.length', 3);
    cy.get('*[data-child-cy]').each((el, index) => {
      cy.wrap(el).should('contain', children[index]);
      if (index !== activeTab) {
        cy.wrap(el).parent().should('have.css', 'height', '0px');
      }
    });
  });
});

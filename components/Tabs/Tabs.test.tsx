import { mount } from '@cypress/react';

import { withThemeWrapper } from 'tools/testing';

import TabHead from './TabHead';
import TabBody from './TabBody';

describe('TabHead', () => {
  it('Render titles', () => {
    const titles = ['asd', 'asd2', 'asd3', 'asd4'];
    mount(
      withThemeWrapper(
        <TabHead data-cy="tab-head" titles={titles} activeTab={0} setActiveTab={() => {}} />,
      ),
    );

    cy.get('*[data-cy=tab-head]').children().should('have.length', 4);
    cy.get('*[data-cy=tab-head]')
      .children()
      .each((el, index) => {
        cy.wrap(el)
          .children()
          .first()
          .should('contain', titles[index])
          .and('have.attr', 'data-tab-index', index)
          .and('not.have.css', 'border-bottom-color', 'transparent');
      });
  });

  it('Check active tab', () => {
    const titles = ['asd', 'asd2', 'asd3', 'asd4'];
    const activeTabIndex = 1;
    const callback = cy.stub();
    mount(
      withThemeWrapper(
        <TabHead
          data-cy="tab-head"
          titles={titles}
          activeTab={activeTabIndex}
          setActiveTab={callback}
        />,
      ),
    );

    cy.get('*[data-cy=tab-head]')
      .children()
      .each((el, index) => {
        if (activeTabIndex === index) {
          cy.wrap(el)
            .children()
            .first()
            .should('not.have.css', 'border-bottom-color', 'transparent');
        }
      });

    cy.get('*[data-cy=tab-head]')
      .children()
      .eq(2)
      .click()
      .then(() => {
        cy.get('*[data-cy=tab-head]')
          .children()
          .eq(2)
          .children()
          .first()
          .should('not.have.css', 'border-bottom-color', 'transparent');
        expect(callback).to.have.been.callCount(1);
        expect(callback).to.have.been.calledWith(2);
      });
  });
});

describe('TabBody', () => {
  it('Empty render', () => {
    mount(withThemeWrapper(<TabBody data-cy="tab-body" />));
    cy.contains('Empty');
  });

  it('Active tab render', () => {
    const children = ['Child 1', 'Child 2'];
    const activeTab = 1;
    mount(
      withThemeWrapper(
        <TabBody data-cy="tab-body" activeTab={activeTab}>
          {children.map((child) => (
            <div data-child-cy="true">{child}</div>
          ))}
        </TabBody>,
      ),
    );

    cy.get('*[data-child-cy]').should('have.length', 2);
    cy.get('*[data-child-cy]').each((el, index) => {
      cy.wrap(el).should('contain', children[index]);
      if (index !== activeTab) {
        cy.wrap(el).parent().should('have.css', 'height', '0px');
      }
    });
  });
});

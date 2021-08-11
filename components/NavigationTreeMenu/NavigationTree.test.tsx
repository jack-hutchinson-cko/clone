import { mount } from '@cypress/react';

import { withThemeWrapper } from 'tools/testing';
import { NavTreeElement } from 'types/navTree';

import NavigationTree from './NavigationTree';

const navTree = (links: NavTreeElement[], activeLink: string) => (
  <div className="nav-tree-test-wrapper">
    <NavigationTree
      docsTreeLinks={links}
      NavSection={({ isRoot, isOpen, link, children }) => (
        <div data-root-cy={isRoot ? 1 : 0} data-open-cy={isOpen} className="test-section">
          <div>{link}</div>
          <div className="test-section-content">{children}</div>
        </div>
      )}
      NavItem={({ isRoot, link }) => (
        <div data-root-cy={isRoot ? 1 : 0} className="test-item">
          {link}
        </div>
      )}
      NavLink={({ isActive, href, children }) => (
        <a data-active-cy={isActive ? 1 : 0} href={href} className="test-link">
          {children}
        </a>
      )}
      activeLink={activeLink}
    />
  </div>
);

describe('NavigationTree', () => {
  it('Render a nav item', () => {
    const testActiveLink = '/test';
    const links: NavTreeElement[] = [{ id: '1', title: 'Test 1', path: '/test1' }];

    mount(withThemeWrapper(navTree(links, testActiveLink)));

    cy.get('.nav-tree-test-wrapper').children().should('have.length', 1);

    cy.get('.nav-tree-test-wrapper')
      .children()
      .first()
      .invoke('attr', 'class')
      .should('eq', 'test-item');

    cy.get('.nav-tree-test-wrapper')
      .children()
      .first()
      .invoke('attr', 'data-root-cy')
      .should('eq', '1');

    cy.get('.nav-tree-test-wrapper')
      .children()
      .first()
      .find('.test-link')
      .invoke('attr', 'class')
      .should('eq', 'test-link');

    cy.get('.nav-tree-test-wrapper').children().find('.test-link').should('contain', 'Test 1');
    cy.get('.nav-tree-test-wrapper')
      .children()
      .find('.test-link')
      .invoke('attr', 'href')
      .should('eq', '/test1');
  });

  it('Render a nav section', () => {
    const testActiveLink = '/test';
    const links: NavTreeElement[] = [
      {
        id: '2',
        title: 'Test 2',
        path: '/test2',
        children: [
          { id: '3', title: 'Test 3', path: '/test3' },
          { id: '4', title: 'Test 4', path: '/test4' },
        ],
      },
    ];

    mount(withThemeWrapper(navTree(links, testActiveLink)));

    cy.get('.nav-tree-test-wrapper').children().should('have.length', 1);

    cy.get('.nav-tree-test-wrapper')
      .children()
      .first()
      .should('have.attr', 'class', 'test-section');

    cy.get('.nav-tree-test-wrapper').find('.test-section .test-item').should('have.length', 2);
    cy.get('.nav-tree-test-wrapper')
      .find('.test-section .test-item')
      .eq(0)
      .find('.test-link')
      .should('have.length', 1)
      .and('have.attr', 'href', '/test3')
      .and('contain', 'Test 3');

    cy.get('.nav-tree-test-wrapper')
      .find('.test-section .test-item')
      .eq(1)
      .find('.test-link')
      .should('have.length', 1)
      .and('have.attr', 'href', '/test4')
      .and('contain', 'Test 4');
  });

  it('If an item is root', () => {
    const testActiveLink = '/test';
    const links: NavTreeElement[] = [
      { id: '1', title: 'Test 1', path: '/test1' },
      {
        id: '2',
        title: 'Test 2',
        path: '/test2',
        children: [{ id: '3', title: 'Test 3', path: '/test3' }],
      },
    ];

    mount(withThemeWrapper(navTree(links, testActiveLink)));

    cy.get('.nav-tree-test-wrapper').find('.test-item').should('have.length', 2);
    cy.get('.nav-tree-test-wrapper')
      .find('.test-item')
      .eq(0)
      .should('have.attr', 'data-root-cy', '1')
      .and('contain', 'Test 1');

    cy.get('.nav-tree-test-wrapper')
      .find('.test-item')
      .eq(1)
      .should('have.attr', 'data-root-cy', '0')
      .and('contain', 'Test 3');
  });

  it('If a section is root', () => {
    const testActiveLink = '/test';
    const links: NavTreeElement[] = [
      {
        id: '1',
        title: 'Test 1',
        path: '/test1',
        children: [
          {
            id: '2',
            title: 'Test 2',
            path: '/test2',
            children: [{ id: '3', title: 'Test 3', path: '/test3' }],
          },
        ],
      },
    ];

    mount(withThemeWrapper(navTree(links, testActiveLink)));

    cy.get('.nav-tree-test-wrapper').find('.test-section').should('have.length', 2);
    cy.get('.nav-tree-test-wrapper')
      .find('.test-section')
      .eq(0)
      .should('have.attr', 'data-root-cy', '1')
      .parent()
      .should('have.attr', 'class', 'nav-tree-test-wrapper');

    cy.get('.nav-tree-test-wrapper')
      .find('.test-section')
      .eq(1)
      .should('have.attr', 'data-root-cy', '0')
      .parent()
      .should('have.attr', 'class', 'test-section-content');
  });

  it('If a link is active', () => {
    const testActiveLink = '/test1';
    const links: NavTreeElement[] = [
      { id: '1', title: 'Test 1', path: '/test1' },
      { id: '3', title: 'Test 3', path: '/test3' },
    ];

    mount(withThemeWrapper(navTree(links, testActiveLink)));

    cy.get('.nav-tree-test-wrapper').find('.test-link').should('have.length', 2);
    cy.get('.nav-tree-test-wrapper')
      .find('.test-link')
      .eq(0)
      .should('have.attr', 'data-active-cy', '1')
      .and('contain', 'Test 1');

    cy.get('.nav-tree-test-wrapper')
      .find('.test-link')
      .eq(1)
      .should('have.attr', 'data-active-cy', '0')
      .and('contain', 'Test 3');
  });
});

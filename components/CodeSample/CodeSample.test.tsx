import { mount } from '@cypress/react';
import Highlight from 'prism-react-renderer';

import { withThemeWrapper } from 'tools/testing';
import CodeSample from './CodeSample';
import PreLine, { defaultLineHeight, defaultLengthWithCollapsible } from './PreLine';
import { Token } from './type';

const code = '{"destination":{"type":"token"}}';

const createLines = (rowsNumber: number): Token[][] =>
  new Array(rowsNumber).fill([
    { types: ['keyword'], content: 'var' },
    { types: ['plain'], content: ' test ' },
    { types: ['operator'], content: '=' },
    { types: ['plain'], content: ' ' },
    { types: ['string'], content: '"Hello World!"' },
    { types: ['punctuation'], content: ';' },
  ]);

const getTokenProps: Highlight['getTokenProps'] = ({ token }) => ({
  className: '',
  children: token.content,
});

const getLineProps: Highlight['getLineProps'] = () => ({
  className: '',
});

describe('CodeSample', () => {
  it('Сopying to clipboard', () => {
    mount(
      withThemeWrapper(
        <CodeSample
          data-cy="code-sample"
          isEditMode={false}
          isCollapsible={false}
          withBorder={false}
          language="json"
          code={code}
        />,
      ),
    );

    cy.get('*[data-cy=code-sample]').children().should('have.length', 3);
    cy.get('*[data-cy=code-sample]').children().eq(1).find('svg').should('have.length', 1);

    cy.get('*[data-cy=code-sample]')
      .children()
      .eq(1)
      .click({ force: true })
      .then(() => {
        cy.get('*[data-cy=code-sample]').children().eq(1).should('contain', 'Copied!');
        cy.task('getClipboard').should('equal', code);
      });
  });
});

describe('PreLine', () => {
  it('Render code', () => {
    mount(
      withThemeWrapper(
        <PreLine
          data-cy="code-pre-line"
          tokens={createLines(1)}
          isEditMode={false}
          isCollapsible={false}
          withBorder={false}
          getTokenProps={getTokenProps}
          getLineProps={getLineProps}
          editorComponent={null}
        />,
      ),
    );

    cy.get('*[data-cy=code-pre-line]').children().should('have.length', 2);
    cy.get('*[data-cy=code-pre-line]').children().eq(0).should('contain', '1');
    cy.get('*[data-cy=code-pre-line]')
      .children()
      .eq(1)
      .should('contain', 'var test = "Hello World!";');
  });

  it("It's collapsible", () => {
    mount(
      withThemeWrapper(
        <div style={{ position: 'relative' }}>
          <PreLine
            data-cy="code-pre-line"
            editorComponent={null}
            tokens={createLines(15)}
            isCollapsible
            isEditMode={false}
            withBorder={false}
            getTokenProps={getTokenProps}
            getLineProps={getLineProps}
          />
        </div>,
      ),
    );

    cy.get('*[data-cy=code-pre-line]').should(
      'have.attr',
      'height',
      `${defaultLineHeight * defaultLengthWithCollapsible + 2 * defaultLineHeight}`,
    );

    cy.get('*[data-cy=code-pre-line]').next().find('svg').should('have.length', 1);
    cy.get('*[data-cy=code-pre-line]')
      .next()
      .find('svg')
      .click()
      .then(() => {
        cy.get('*[data-cy=code-pre-line]').should(
          'have.attr',
          'height',
          `${defaultLineHeight * 15 + 2 * defaultLineHeight}`,
        );
      });
  });
});

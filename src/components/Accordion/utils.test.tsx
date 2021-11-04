import { mount } from '@cypress/react';

import { getMarginStyle, getHeightOfInnerContent } from './utils';

describe('getMarginStyle', () => {
  it('Required props', () => {
    mount(
      <div style={{ height: '100px', display: 'block' }} data-cy="test">
        test
      </div>,
    );
    cy.get('*[data-cy=test]').then((el) => {
      expect(getMarginStyle(el.get(0), 'height')).to.equal(100);
      expect(getMarginStyle(el.get(0), 'display')).to.equal(0);
    });
  });
});

describe('getHeightOfInnerContent', () => {
  it('Passed null', () => {
    expect(getHeightOfInnerContent(null)).to.equal(0);
  });
  it('Passed DOM element without children', () => {
    mount(<div style={{ height: '100px', display: 'block' }} data-cy="test" />);
    cy.get('*[data-cy=test]').then(() => {
      expect(getHeightOfInnerContent(null)).to.equal(0);
    });
  });
  it('Passed DOM element with children', () => {
    mount(
      <div data-cy="test">
        <div style={{ height: '100px', marginBottom: '5px', marginTop: '11px' }} />
      </div>,
    );
    cy.get('*[data-cy=test]').then((el) => {
      expect(getHeightOfInnerContent(el[0])).to.equal(116);
    });
  });
});

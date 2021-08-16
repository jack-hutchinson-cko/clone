import { mount } from '@cypress/react';

import { convertSVGToImageUrl, withThemeWrapper } from 'tools/testing';
import ImageBox from './ImageBox';

const testImgUrl = convertSVGToImageUrl(`
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
     <circle cx="25" cy="25" r="20"/>
  </svg>
`);

describe('ImageBox', () => {
  it('Wrapper size', () => {
    mount(
      withThemeWrapper(
        <ImageBox
          data-cy="image-box"
          loader={({ src }) => `${src}`}
          src={testImgUrl}
          maxWidth={170}
          layout="fill"
        />,
      ),
    );

    cy.get('*[data-cy=image-box]').should('have.length', 1);
    cy.get('*[data-cy=image-box]').invoke('attr', 'src').should('eq', testImgUrl);
    cy.get('*[data-cy=image-box]').parent().parent().should('have.css', 'max-width', `${170}px`);
  });
});

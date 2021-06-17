import styled from 'styled-components';

export const StyledAccordionBody = styled.div<{ isOpen: boolean | undefined }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

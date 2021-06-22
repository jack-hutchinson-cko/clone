import styled from 'styled-components';

export const SubFooterSocialLinksWrapper = styled.ul<{ isMobile: boolean }>`
  display: flex;
  justify-content: ${({ isMobile }) => (isMobile ? 'space-between' : 'flex-end')};
  gap: 24px;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: block;
    margin: 0;
    padding: 0;
  }
`;

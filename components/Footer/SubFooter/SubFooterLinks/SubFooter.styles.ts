import styled from 'styled-components';

type SubFooterLinksProps = {
  isMobile?: boolean;
};

export const SubFooterList = styled.ul<SubFooterLinksProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  gap: ${({ isMobile }) => (isMobile ? 16 : 40)}px;
  margin: 0;
  padding: 0;
  text-align: ${({ isMobile }) => (isMobile ? 'left' : 'center')};

  a {
    font-size: inherit;
    font-weight: 400;
    line-height: ${({ isMobile }) => (isMobile ? 24 : 15)}px;
  }
`;

export const SubFooterListItem = styled.li`
  display: block;
  color: ${({ theme }) => theme.colors.greyDark};
`;

import styled from 'styled-components';

import Accordion, { AccordionHead } from 'components/Accordion';

type FooterLinksProps = {
  isMobile: boolean;
};

export const FooterLinksWrapper = styled.div<FooterLinksProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  margin-top: ${({ isMobile }) => (isMobile ? 16 : 40)}px;
`;

export const FooterAccordion = styled(Accordion)`
  margin-top: 40px;
  padding: 0 0 28px;
  color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.cometLight};
`;

export const FooterAccordionHead = styled(AccordionHead)`
  padding: 0 0 12px;
  font-size: 18px;
  text-align: left;
  text-transform: uppercase;
  line-height: 16px;
  letter-spacing: 1.6px;
  color: ${({ theme }) => theme.colors.white};
`;

export const FooterListTitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 24px;
  letter-spacing: 1.76px;
`;

export const FooterColumns = styled.div<FooterLinksProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  gap: ${({ isMobile }) => (isMobile ? 25 : 60)}px;
  margin-top: 16px;
`;

export const FooterColumn = styled.ul<FooterLinksProps>`
  margin: 0;
  padding: 0;
`;

export const FooterColumnItem = styled.li<FooterLinksProps>`
  color: ${({ theme }) => theme.colors.greyDark};
  font-size: 14px;
  line-height: ${({ isMobile }) => (isMobile ? 32 : 40)}px;

  a {
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.2s, color 0.5s;
  }

  a:hover {
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.greyDark};
  }
`;

export const FooterLinkSpecial = styled.span`
  margin-left: 8px;
  padding: 4px 6px;
  color: ${({ theme }) => theme.colors.successDark};
  background: ${({ theme }) => theme.colors.lightCyan};
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 16px;
`;

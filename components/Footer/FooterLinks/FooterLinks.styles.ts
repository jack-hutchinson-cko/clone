import styled from 'styled-components';

import { createBreakpointTo, SIZE, Breakpoints } from 'constants/screen';
import { spacing } from 'constants/spacingSize';
import Accordion, { AccordionHead } from 'components/Accordion';

export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: ${spacing.s70}px;

  @media ${createBreakpointTo(SIZE.L)} {
    margin-top: ${spacing.s00};
    flex-direction: column;
  }
`;

export const FooterAccordion = styled(Accordion)`
  margin-top: ${spacing.s50}px;
  padding: ${spacing.s00} ${spacing.s00} ${spacing.s50}px;
  color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.cometLight};

  @media ${Breakpoints.MOBILE} {
    margin-top: ${spacing.s50}px;
    padding: ${spacing.s00} ${spacing.s00} ${spacing.s50}px;
  }
`;

export const FooterAccordionHead = styled(AccordionHead)`
  padding: 0;
  text-align: left;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.white};

  @media ${createBreakpointTo(SIZE.L)} {
    & svg {
      width: 15px;
      height: 15px;
    }
  }
`;

export const FooterListTitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 16px;
  letter-spacing: 1.76px;
`;

export const FooterColumns = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 60px;
  margin-top: 14px;

  @media ${createBreakpointTo(SIZE.L)} {
    flex-direction: column;
    gap: 25px;
    margin-top: ${spacing.s40}px;
  }
`;

export const FooterColumn = styled.ul`
  margin: 0;
  padding: 0;
`;

export const FooterColumnItem = styled.li`
  color: ${({ theme }) => theme.colors.greyDark};
  font-size: 14px;
  line-height: 40px;

  a {
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.2s, color 0.5s;

    &:hover {
      border-bottom: 0.5px solid ${({ theme }) => theme.colors.greyDark};
    }
  }

  @media ${createBreakpointTo(SIZE.L)} {
    line-height: 32px;
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

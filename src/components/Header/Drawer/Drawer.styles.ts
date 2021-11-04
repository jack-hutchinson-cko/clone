import styled from 'styled-components';
import { Breakpoints } from 'src/constants/screen';

export const Content = styled.aside`
  display: flex;
  flex-direction: column;
  width: 340px;
  max-height: 100%;
  overflow-y: auto;
  will-change: filter;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  filter: drop-shadow(0px 2px 5px rgba(12, 17, 66, 0.15));
  background-color: ${({ theme }) => theme.colors.background};

  @media ${Breakpoints.MOBILE} {
    filter: none;
    width: 100%;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  pointer-events: auto;
  flex: 1;
`;

export const Background = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
`;

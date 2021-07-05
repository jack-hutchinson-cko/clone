import styled from 'styled-components';

export const CardsWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

export const CardContainer = styled.div<{ isMobile: boolean }>`
  width: ${({ isMobile }) => (isMobile ? '100%' : 'calc(50% - 14px)')};
`;

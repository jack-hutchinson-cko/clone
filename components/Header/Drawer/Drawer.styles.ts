import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex: 1;
  pointer-events: auto;
`;

export const Background = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
`;
export const Content = styled.aside<{ autoSize?: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ autoSize }) => (autoSize ? '100%' : '340px')};
  max-height: 100%;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.white};
  border-left: 1px solid ${({ theme }) => theme.colors.greyLight};
  filter: drop-shadow(0px 6px 5px rgba(12, 17, 66, 0.15));
  padding: 20px 30px;
`;

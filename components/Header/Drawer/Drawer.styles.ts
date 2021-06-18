import styled, { css } from 'styled-components';

export const Content = styled.aside`
  display: flex;
  flex-direction: column;
  width: 340px;
  max-height: 100%;
  overflow-y: auto;
  border-left: 1px solid ${({ theme }) => theme.colors.greyLight};
  filter: drop-shadow(0px 6px 5px rgba(12, 17, 66, 0.15));
`;

export const Top = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 30px;
  width: 100%;

  &:only-child {
    flex: 1;
  }
`;

export const Bottom = styled.div`
  background: ${({ theme }) => theme.colors.greyLight};
  padding: 30px;
  width: 100%;
  flex: 1;
`;

export const Container = styled.div<{ isMobile?: boolean }>`
  position: relative;
  display: flex;
  justify-content: flex-end;
  pointer-events: auto;
  flex: 1;

  ${({ isMobile }) =>
    isMobile &&
    css`
      ${Content} {
        width: 100%;
      }
    `}
`;

export const Background = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
`;

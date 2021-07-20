import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.5s;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &:hover {
    box-shadow: 0 8px 16px rgb(0 18 44 / 12%);
    border: 1px solid ${({ theme }) => theme.colors.textHighlight};
    transition: border 0.5s;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
`;

export const HeaderImage = styled.div<{ width: number }>`
  width: ${({ width }) => width}px;
`;

export const Body = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 300;
`;

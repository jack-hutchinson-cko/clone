import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.base};
`;

export const Header = styled.div`
  cursor: pointer;
  height: 38px;
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  align-items: center;
  padding: 0 10px;
  gap: 8px;
`;

export const IconContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  transform: ${({ isOpen }) => (isOpen ? '' : 'rotate(180deg)')};
  color: ${({ theme }) => theme.colors.white};
`;

export const Body = styled.div`
  cursor: pointer;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px 20px 20px;
  background: ${({ theme }) => theme.colors.cardFormBackground};
`;

export const Header = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 30px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
`;

export const IconContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  transform: ${({ isOpen }) => (isOpen ? '' : 'rotate(180deg)')};

  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Body = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Preview = styled.span`
  color: ${({ theme }) => theme.colors.white};
`;

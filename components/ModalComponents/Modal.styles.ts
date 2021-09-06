import styled from 'styled-components';

export const ModalRoot = styled.div<{ isOpen?: boolean }>`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.darkSemiOpacity};
  padding: 80px 165px;
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const ContentWrapper = styled.div`
  display: flex;
  max-width: 100%;
`;

export const IconClose = styled.span`
  position: absolute;
  right: 44px;
  top: 37px;
  width: 25px;
  height: 25px;

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 32px;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.successLight};
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

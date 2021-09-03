import styled from 'styled-components';
import { IconFullScreen } from '../Icons';

export const StyledIconFullScreen = styled(IconFullScreen)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  position: relative;

  ${StyledIconFullScreen} {
    opacity: 0;
  }

  &:hover {
    ${StyledIconFullScreen} {
      transition: 1s;
      opacity: 1;
    }
  }
`;

export const ModalRoot = styled.div`
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  height: 100vh;
  padding: 60px 80px;
  overflow: auto;
  margin: 0 auto;

  & img {
    cursor: auto;
  }
`;

export const IconClose = styled.span`
  position: absolute;
  right: 40px;
  top: 20px;
  width: 25px;
  height: 25px;

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 25px;
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

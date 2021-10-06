import styled from 'styled-components';
import { IconFullScreen } from '../Icons';

export const StyledIconFullScreen = styled(IconFullScreen)`
  position: absolute;
  top: 10px;
  right: 10px;
  opacity: 0;
`;

export const ContentWrapper = styled.div`
  position: relative;
  cursor: pointer;
  &:hover {
    ${StyledIconFullScreen} {
      transition: 1s;
      opacity: 1;
    }
  }
`;

export const StyledImage = styled.img`
  object-fit: contain;
  object-position: 50% 50%;
  min-width: 100%;
  cursor: auto;
`;

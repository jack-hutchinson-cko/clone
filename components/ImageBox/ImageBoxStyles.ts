import styled from 'styled-components';
import Image from 'next/image';

// TODO implement response for img
export const StyledImage = styled(Image)`
  object-fit: contain;
  width: 100% !important;
  position: relative !important;
  height: unset !important;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  & > div {
    position: unset !important;
  }
`;

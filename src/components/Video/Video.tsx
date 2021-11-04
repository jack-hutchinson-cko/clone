import { FC } from 'react';
import styled from 'styled-components';
import { spacing } from 'src/constants/spacingSize';

type Props = {
  src: string;
  width?: string;
};

const StyledVideo = styled.video`
  display: flex;
  margin: ${spacing.s40}px auto;
`;

const Video: FC<Props> = ({ src, width = '500' }) => (
  <StyledVideo width={width} controls>
    <source src={src} />
  </StyledVideo>
);

export default Video;

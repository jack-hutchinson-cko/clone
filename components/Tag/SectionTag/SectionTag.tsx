import { FC } from 'react';
import Link from 'next/link';

import { SectionTagProps } from '../types';
import { StyledSectionTag } from './SectionTag.styles';

const SectionTag: FC<SectionTagProps> = ({ url, title }) => {
  return (
    <StyledSectionTag>
      <Link href={url}>{title}</Link>
    </StyledSectionTag>
  );
};

export default SectionTag;

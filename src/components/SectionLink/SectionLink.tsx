import React, { FC } from 'react';
import Link from 'next/link';

import { Wrapper, Title, Description } from './SectionLink.styles';

type Props = {
  title: string;
  titleUrl: string;
  description: string;
};

const SectionLink: FC<Props> = ({ title, titleUrl, description, children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Title data-cy="section-link-title">
        <Link href={titleUrl}>{title}</Link>
      </Title>
      {description && <Description data-cy="section-link-description">{description}</Description>}
      {children && <div>{children}</div>}
    </Wrapper>
  );
};

export default SectionLink;

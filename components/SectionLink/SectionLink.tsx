import React, { FC } from 'react';
import Link from 'next/link';

import { Wrapper, Title, Description } from './SectionLink.styles';

type Props = {
  title: string;
  titleUrl: string;
  description: string;
};

const SectionLink: FC<Props> = ({ title, titleUrl, description, children }) => {
  return (
    <Wrapper>
      <Title>
        <Link href={titleUrl}>{title}</Link>
      </Title>
      {description && <Description>{description}</Description>}
      {children && <div>{children}</div>}
    </Wrapper>
  );
};

export default SectionLink;

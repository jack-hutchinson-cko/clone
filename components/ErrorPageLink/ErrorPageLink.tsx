import { FC } from 'react';
import Link from 'next/link';
import { basePathAddition } from 'tools/basePathAddition';
import { StyledLink, StyledArrowIcon, StyledReactSVG } from './ErrorPageLink.styles';

type Props = {
  imageUrl: string;
  url: string;
};

const ErrorPageLink: FC<Props> = (props) => {
  const { imageUrl, url, children } = props;
  const arrowSrc = basePathAddition('/errorPage/arrow-right.svg');
  return (
    <Link href={url} passHref>
      <StyledLink href="/replace">
        <StyledReactSVG src={imageUrl} />
        <div>
          {children}
          <StyledArrowIcon src={arrowSrc} />
        </div>
      </StyledLink>
    </Link>
  );
};

export default ErrorPageLink;

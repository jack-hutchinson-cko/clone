import { FC } from 'react';
import Link from 'next/link';
import { StyledLink, StyledArrowIcon, StyledReactSVG } from './ErrorPageLink.styles';

type Props = {
  imageUrl: string;
  url: string;
};

const ErrorPageLink: FC<Props> = (props) => {
  const { imageUrl, url, children } = props;
  return (
    <Link href={url} passHref>
      <StyledLink href="/replace">
        <StyledReactSVG src={imageUrl} />
        <div>
          {children}
          <StyledArrowIcon src="/errorPage/arrow-right.svg" />
        </div>
      </StyledLink>
    </Link>
  );
};

export default ErrorPageLink;

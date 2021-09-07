import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Wrapper, Title } from './CountryCardLink.styles';

type Props = {
  url: string;
  countryName: string;
  flagImageSrc: string;
};

const CountryCartLink: FC<Props> = (props) => {
  const { url, countryName, flagImageSrc } = props;
  return (
    <Link href={url} passHref>
      <Wrapper href={url}>
        <Image src={flagImageSrc} width={40} height={40} />
        <Title>{countryName}</Title>
      </Wrapper>
    </Link>
  );
};

export default CountryCartLink;

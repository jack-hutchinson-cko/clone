import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Wrapper, Title } from './CountryCardLink.styles';
import { countriesMap } from './countriesMap';

type Props = {
  url: string;
  type: string;
};

const flagImageHeight = 40;
const flagImageWidth = 40;

const CountryCartLink: FC<Props> = ({ url, type }) => {
  const flagImageSrc = countriesMap.get(type.toLowerCase()) || '';
  return (
    <Link href={url} passHref>
      <Wrapper href={url}>
        <Image src={flagImageSrc} width={flagImageWidth} height={flagImageHeight} />
        <Title>{type}</Title>
      </Wrapper>
    </Link>
  );
};

export default CountryCartLink;

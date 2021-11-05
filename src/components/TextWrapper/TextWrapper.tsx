import { FC } from 'react';
import {
  TextHeadingOne,
  TextHeadingTwo,
  TextHeadingThree,
  TextHeadingFour,
} from 'src/components/TextHeading';

const ComponentsMap: { [key: string]: FC<unknown> } = {
  h1: TextHeadingOne,
  h2: TextHeadingTwo,
  h3: TextHeadingThree,
  h4: TextHeadingFour,
};

type Props = {
  headerType: 'h1' | 'h2' | 'h3' | 'h4';
};

export const TextWrapper: FC<Props> = ({ headerType, children }) => {
  if (ComponentsMap[headerType]) {
    const Component = ComponentsMap[headerType];
    return <Component>{children}</Component>;
  }
  return <>{children}</>;
};

import React, { FC } from 'react';
import { toString } from 'lodash';
import { Language } from 'prism-react-renderer';
import CodeSample from './CodeSample';

export type Props = {
  className?: string;
  language?: Language;
  isCollapsible: boolean;
  withBorder: boolean;
};

const MDXCodeSample: FC<Props> = ({ children, language, ...otherProps }) => {
  const languageFromClass = (otherProps.className || '').replace('language-', '') as Language;

  return (
    <CodeSample
      code={toString(children)}
      language={language || languageFromClass}
      {...otherProps}
    />
  );
};

export default MDXCodeSample;

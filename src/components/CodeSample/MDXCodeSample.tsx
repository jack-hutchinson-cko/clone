import React, { FC } from 'react';
import { toString } from 'lodash';
import { Language } from 'prism-react-renderer';
import CodeSample from './CodeSample';

export type Props = {
  className?: string;
  language?: Language;
  isCollapsible: boolean;
  withBorder: boolean;
  withControls: boolean;
  isEditMode: boolean;
  selectedLines?: never[];
};

const getBoolMdxProps = (prop: string | boolean): boolean =>
  typeof prop === 'boolean' ? prop : prop === 'true';

const MDXCodeSample: FC<Props> = ({
  children,
  language,
  withBorder = true,
  withControls = true,
  isCollapsible = true,
  isEditMode,
  selectedLines,
  ...otherProps
}) => {
  const languageFromClass = (otherProps.className || '').replace('language-', '') as Language;
  const code = toString(children);
  const resultCode = code.charAt(code.length - 1) === '\n' ? code.slice(0, code.length - 1) : code;

  return (
    <CodeSample
      code={resultCode}
      language={language || languageFromClass}
      isCollapsible={getBoolMdxProps(isCollapsible) && !getBoolMdxProps(isEditMode)}
      withBorder={getBoolMdxProps(withBorder)}
      withControls={getBoolMdxProps(withControls)}
      isEditMode={getBoolMdxProps(isEditMode)}
      selectedLines={selectedLines}
      {...otherProps}
    />
  );
};

export default MDXCodeSample;
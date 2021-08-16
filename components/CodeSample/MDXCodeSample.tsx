import React, { FC, useContext } from 'react';
import { toString } from 'lodash';
import { Language } from 'prism-react-renderer';
import { SelectedLinesContext } from 'components/IBuilder';
import CodeSample from './CodeSample';

export type Props = {
  className?: string;
  language?: Language;
  isCollapsible: boolean;
  withBorder: boolean;
  isEditMode: boolean;
};

const getBoolMdxProps = (prop: string | boolean): boolean =>
  typeof prop === 'boolean' ? prop : prop === 'true';

const MDXCodeSample: FC<Props> = ({
  children,
  language,
  withBorder = true,
  isCollapsible = true,
  isEditMode,
  ...otherProps
}) => {
  const languageFromClass = (otherProps.className || '').replace('language-', '') as Language;
  const code = toString(children);
  const resultCode = code.charAt(code.length - 1) === '\n' ? code.slice(0, code.length - 1) : code;

  const selectedLines = useContext(SelectedLinesContext);

  return (
    <CodeSample
      code={resultCode}
      language={language || languageFromClass}
      isCollapsible={getBoolMdxProps(isCollapsible) && !getBoolMdxProps(isEditMode)}
      withBorder={getBoolMdxProps(withBorder)}
      isEditMode={getBoolMdxProps(isEditMode)}
      selectedLines={selectedLines}
      {...otherProps}
    />
  );
};

export default MDXCodeSample;

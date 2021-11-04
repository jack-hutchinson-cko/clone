import { get } from 'lodash';
import { useEffect, FC, useRef, useState } from 'react';

import { StyledTextArea } from './CodeSample.styles';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const TextArea: FC<Props> = ({ value = '', onChange }) => {
  const inputRef = useRef(null);
  const [width, setWidth] = useState('100%');

  const handelKeyDown = (event: any) => {
    if (event.key === 'Tab') {
      document.execCommand('insertText', false, '  ');
      event.preventDefault();
      return false;
    }

    return true;
  };

  const handelOnChange = (event: any) => {
    onChange(event.target.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      setWidth(`${get(inputRef, 'current.scrollWidth')}px`);
    }
  }, [value]);

  return (
    <>
      <StyledTextArea id="size" ref={inputRef} value={value} width="100%" isHidden />
      <StyledTextArea
        width={width}
        value={value}
        onChange={handelOnChange}
        onKeyDown={handelKeyDown}
      />
    </>
  );
};

export default TextArea;

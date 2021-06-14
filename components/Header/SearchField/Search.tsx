import { FC } from 'react';
import { IconSearch } from 'components/Icons';
import { TextField, TextAction, TextFieldWrapper } from './Search.styles';

type Props = {
  width?: number;
};

const Search: FC<Props> = ({ width }) => {
  return (
    <TextFieldWrapper>
      <TextField width={width} placeholder="Search" />
      <TextAction>
        <IconSearch />
      </TextAction>
    </TextFieldWrapper>
  );
};

export default Search;

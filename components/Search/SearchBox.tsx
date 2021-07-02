import { FC } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { TextFieldHolder, TextField, SearchActionIcon } from './SearchBox.styles';

type Props = {
  currentRefinement: string;
  refine: (value: string) => void;
  onSubmit: () => void;
};

const CustomSearchBox: FC<Props> = ({ currentRefinement, refine, onSubmit }) => {
  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <TextFieldHolder>
        <TextField
          type="search"
          value={currentRefinement}
          onChange={(event) => {
            refine(event.currentTarget.value);
          }}
          placeholder="Search"
        />
        <SearchActionIcon />
      </TextFieldHolder>
    </form>
  );
};

export default connectSearchBox(CustomSearchBox);

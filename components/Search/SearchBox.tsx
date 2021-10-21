import { FC } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { IconSearch } from 'components/Icons';
import { TextFieldHolder, TextField, CrossSearchIcon } from './SearchBox.styles';

type Props = {
  isFAQSection: boolean;
  currentRefinement: string;
  refine: (value: string) => void;
  onSubmit: () => void;
};

const CustomSearchBox: FC<Props> = ({ isFAQSection, currentRefinement, refine, onSubmit }) => {
  const Icon = currentRefinement.length ? CrossSearchIcon : IconSearch;
  const placeholderText = isFAQSection ? 'Search for a question, topic or keyword...' : 'Search';

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    refine(event.currentTarget.value);
  };

  const onClear = () => {
    refine('');
  };

  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <TextFieldHolder isFAQSection={isFAQSection}>
        <TextField
          isFAQSection={isFAQSection}
          value={currentRefinement}
          onChange={onChange}
          placeholder={placeholderText}
        />
        {!isFAQSection && <Icon onClick={onClear} width={16} height={16} />}
      </TextFieldHolder>
    </form>
  );
};

export default connectSearchBox(CustomSearchBox);

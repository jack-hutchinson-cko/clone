import { FC } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { useMatchMedia } from '@cko/primitives';
import { MobileBreakPoints } from 'constants/screen';
import { IconSearch } from 'components/Icons';
import { TextFieldHolder, TextField, CrossSearchIcon } from './SearchBox.styles';

type Props = {
  isFAQSection: boolean;
  currentRefinement: string;
  refine: (value: string) => void;
  onSubmit: () => void;
};

const LARGE_SIZE = 32;
const SMALL_SIZE = 16;

const CustomSearchBox: FC<Props> = ({ isFAQSection, currentRefinement, refine, onSubmit }) => {
  const isMobileL = useMatchMedia(MobileBreakPoints.MOBILE_L);
  const isMobileM = useMatchMedia(MobileBreakPoints.MOBILE_M);
  const iconSize = isMobileL || isMobileM ? LARGE_SIZE : SMALL_SIZE;
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
        {!isFAQSection && <Icon onClick={onClear} width={iconSize} height={iconSize} />}
      </TextFieldHolder>
    </form>
  );
};

export default connectSearchBox(CustomSearchBox);

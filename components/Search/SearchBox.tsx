import { FC } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { useMatchMedia } from '@cko/primitives';
import { MobileBreakPoints } from 'constants/screen';
import { IconSearch } from 'components/Icons';
import { TextFieldHolder, TextField, CrossSearchIcon } from './SearchBox.styles';

type Props = {
  currentRefinement: string;
  refine: (value: string) => void;
  onSubmit: () => void;
};

const LARGE_SIZE = 30;
const SMALL_SIZE = 16;

const CustomSearchBox: FC<Props> = ({ currentRefinement, refine, onSubmit }) => {
  const isMobileL = useMatchMedia(MobileBreakPoints.MOBILE_L);
  const iconSize = isMobileL ? LARGE_SIZE : SMALL_SIZE;
  const Icon = currentRefinement.length ? CrossSearchIcon : IconSearch;

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
      <TextFieldHolder>
        <TextField value={currentRefinement} onChange={onChange} placeholder="Search" />
        <Icon onClick={onClear} width={iconSize} height={iconSize} />
      </TextFieldHolder>
    </form>
  );
};

export default connectSearchBox(CustomSearchBox);

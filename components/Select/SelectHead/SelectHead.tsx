import { FC } from 'react';
import { StyledSelectHead, Select, IconChevronDown } from './SelectHead.styles';

type Props = {
  titles: string[];
  setActiveTab: (tabIndex: number) => void;
};

const SelectHead: FC<Props> = ({ setActiveTab, titles = [], ...rest }) => {
  return (
    <StyledSelectHead {...rest}>
      <Select defaultValue={titles[0]} onChange={(e) => setActiveTab(Number(e.target.value))}>
        {titles.map((title, index) => (
          <option key={title} value={index}>
            {title}
          </option>
        ))}
      </Select>
      <IconChevronDown />
    </StyledSelectHead>
  );
};

export default SelectHead;

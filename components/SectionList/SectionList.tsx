import { FC } from 'react';

import { SectionList as List } from 'types/sectionList';
import { SectionListWrapper } from './SectionList.styles';
import SectionItem from './SectionItem';

type Props = {
  activeItem: string;
  list: List[];
};

const SectionList: FC<Props> = ({ activeItem = '', list = [] }) => {
  return (
    <SectionListWrapper>
      {list.map(({ title, url, Icon }) => (
        <SectionItem key={title} href={url} isActive={title === activeItem}>
          <Icon />
          <mark>{title}</mark>
        </SectionItem>
      ))}
    </SectionListWrapper>
  );
};

export default SectionList;

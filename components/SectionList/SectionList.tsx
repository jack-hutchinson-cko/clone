import { FC } from 'react';

import { SectionListItem } from 'types/sectionList';
import { SectionListWrapper } from './SectionList.styles';
import SectionItem from './SectionItem';

type Props = {
  activeItem: string;
  list: SectionListItem[];
};

const SectionList: FC<Props> = ({ activeItem = '', list = [], ...props }) => {
  return (
    <SectionListWrapper {...props}>
      {list.map(({ title, url, Icon }) => (
        <SectionItem
          key={title}
          data-cy="section-list-item"
          href={url}
          isActive={title === activeItem}
        >
          <Icon />
          <mark>{title}</mark>
        </SectionItem>
      ))}
    </SectionListWrapper>
  );
};

export default SectionList;

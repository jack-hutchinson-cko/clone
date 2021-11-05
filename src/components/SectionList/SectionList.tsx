import { FC } from 'react';
import ImageBox from 'src/components/ImageBox';
import { SectionListItem } from 'src/types/sectionList';
import { SectionListWrapper, ImgWrapper } from './SectionList.styles';
import SectionItem from './SectionItem';

type Props = {
  activeItem: string;
  list: SectionListItem[];
};

const SectionList: FC<Props> = ({ activeItem = '', list = [], ...props }) => {
  return (
    <SectionListWrapper {...props}>
      {list.map(({ title, url, imageSrc }) => (
        <SectionItem
          key={title}
          data-cy="section-list-item"
          href={url}
          isActive={url === activeItem}
        >
          <ImgWrapper>
            <ImageBox src={imageSrc} maxWidth={24} withFullscreenPreview={false} />
          </ImgWrapper>
          <mark>{title}</mark>
        </SectionItem>
      ))}
    </SectionListWrapper>
  );
};

export default SectionList;

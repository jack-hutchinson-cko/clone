import { FC } from 'react';
import { DocContentItem, DocContentItemType, DocContent } from 'src/types/content';
import Anchor from './DocBodyComponents/Anchor';
import Text from './DocBodyComponents/Text';

const ComponentMap: { [key in DocContentItemType]: FC<DocContent> } = {
  [DocContentItemType.TEXT]: Text,
  [DocContentItemType.ANCHOR]: Anchor,
};

const DocContentBuilder: FC<DocContentItem> = ({ id, data, params, type, ...rest }) => {
  const Component = ComponentMap[type];

  if (!Component) {
    return null;
  }

  return <Component data={data} params={params} id={id} {...rest} />;
};

export default DocContentBuilder;

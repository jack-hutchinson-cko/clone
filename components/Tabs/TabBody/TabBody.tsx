import React, { FC, ReactElement } from 'react';
import { StyledTabBody } from './TabBody.styles';

type Props = {
  children?: ReactElement | ReactElement[];
  activeTab?: number;
};

const TabBody: FC<Props> = ({ activeTab = 0, children }) => {
  if (!children) {
    return <StyledTabBody isVisible>Empty</StyledTabBody>;
  }

  const childrenArray = React.Children.toArray(children);

  return (
    <div>
      {childrenArray.map((childrenItem, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <StyledTabBody key={index} isVisible={index === activeTab}>
          {childrenItem}
        </StyledTabBody>
      ))}
    </div>
  );
};

export default TabBody;

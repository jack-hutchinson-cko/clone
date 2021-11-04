import React, { FC, ReactElement } from 'react';
import { StyledSelectBody } from './SelectBody.styles';

type Props = {
  children?: ReactElement | ReactElement[];
  activeTab?: number;
};

const SelectBody: FC<Props> = ({ activeTab = 0, children }) => {
  if (!children) {
    return <StyledSelectBody isVisible>Empty</StyledSelectBody>;
  }

  const childrenArray = React.Children.toArray(children);

  return (
    <>
      {childrenArray.map((childrenItem, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <StyledSelectBody key={index} isVisible={index === activeTab}>
          {childrenItem}
        </StyledSelectBody>
      ))}
    </>
  );
};

export default SelectBody;

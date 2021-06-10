import React, { useState, FC, ReactElement } from 'react';
import { StyledTabs } from './Tabs.styles';

export type Props = {
  children: ReactElement[];
};

const Tabs: FC<Props> = ({ children }) => {
  const defaultActiveTab = Number(children?.[0].props?.activeTab) || 0;
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const childrenWithProps = React.Children.map(children, (child) => {
    const newProps = {
      activeTab,
      setActiveTab,
    };

    if (React.isValidElement(child)) {
      return React.cloneElement(child, newProps);
    }

    return child;
  });

  return <StyledTabs>{childrenWithProps}</StyledTabs>;
};

export default Tabs;

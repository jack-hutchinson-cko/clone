import { useState, useEffect, FC, ReactElement, Children, useCallback } from 'react';

import TabHead from './TabHead';
import TabBody from './TabBody';
import { StyledTabs } from './Tabs.styles';

type Props = {
  children: ReactElement[];
};

const Tabs: FC<Props> = ({ children }) => {
  const [titles, setTitles] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<number>(0);

  const getTitlesAndActiveTab = useCallback(() => {
    const childrenTitles: string[] = [];
    let currentActiveTab = 0;

    Children.forEach(children, (child, index) => {
      if (child.props?.title) {
        childrenTitles.push(child.props.title);
      }

      if (child.props?.active) {
        currentActiveTab = index;
      }
    });

    return { childrenTitles, currentActiveTab };
  }, [children]);

  useEffect(() => {
    const { childrenTitles, currentActiveTab } = getTitlesAndActiveTab();

    setTitles(childrenTitles);
    setActiveTab(currentActiveTab);
  }, [children, getTitlesAndActiveTab]);

  return (
    <StyledTabs>
      <TabHead titles={titles} activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabBody activeTab={activeTab}>{children}</TabBody>
    </StyledTabs>
  );
};

export default Tabs;

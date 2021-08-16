import { get } from 'lodash';
import { ReactNode, useState, useEffect, Children } from 'react';

const getTitlesAndActiveTab = (children: ReactNode) => {
  const childrenTitles: string[] = [];
  let currentActiveTab = 0;

  Children.forEach(children, (child, index) => {
    if (get(child, 'props.title')) {
      childrenTitles.push(get(child, 'props.title'));
    }

    if (get(child, 'props.active')) {
      currentActiveTab = index;
    }
  });

  return { childrenTitles, currentActiveTab };
};

export const useTabs = ({
  children,
  selectedTab,
}: {
  children: ReactNode;
  selectedTab?: string;
}): {
  titles: string[];
  activeTab: number;
  setActiveTab: (param: number) => void;
} => {
  const [titles, setTitles] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    const { childrenTitles, currentActiveTab } = getTitlesAndActiveTab(children);

    setTitles(childrenTitles);
    setActiveTab(currentActiveTab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [get(children, 'length')]);

  useEffect(() => {
    if (selectedTab) {
      Children.forEach(children, (child, index) => {
        if (get(child, 'props.title') === selectedTab) {
          setActiveTab(index);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab]);

  return { titles, activeTab, setActiveTab };
};

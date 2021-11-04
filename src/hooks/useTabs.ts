import { get } from 'lodash';
import { ReactNode, useState, useEffect, Children } from 'react';

const getTitlesAndActiveTab = (children: ReactNode, { titleKey }: { titleKey: string }) => {
  const childrenTitles: string[] = [];
  let currentActiveTab = 0;

  Children.forEach(children, (child, index) => {
    if (get(child, `props.${titleKey}`)) {
      childrenTitles.push(get(child, `props.${titleKey}`));
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
  titleKey = 'title',
}: {
  children: ReactNode;
  selectedTab?: string;
  titleKey?: string;
}): {
  titles: string[];
  activeTab: number;
  setActiveTab: (param: number) => void;
} => {
  const [titles, setTitles] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    const { childrenTitles, currentActiveTab } = getTitlesAndActiveTab(children, {
      titleKey,
    });

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

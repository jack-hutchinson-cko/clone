import React, { FC } from 'react';
import { get } from 'lodash';
import { useTabs } from 'hooks/useTabs';
import { TabHeader, TabItem } from './IBuilderCodeTabs.styles';
import { getChildWithProps } from './utils';
import { SelectedBlockType } from './types';

type Props = {
  selectedBlock: SelectedBlockType;
};

export const SelectedLinesContext = React.createContext([]);

const IBuilderCodeTabs: FC<Props> = ({ children, selectedBlock }) => {
  const { titles, activeTab, setActiveTab } = useTabs({ children, selectedTab: selectedBlock.tab });

  const selectedChild = React.Children.toArray(children)[activeTab] || null;
  const childWithProps =
    get(selectedChild, 'props.title') === selectedBlock.tab
      ? getChildWithProps(selectedChild, { selectedLines: selectedBlock.lines })
      : selectedChild;

  return (
    <>
      <TabHeader>
        {titles.map((tabItem, index) => (
          <TabItem
            key={tabItem}
            isSelected={index === activeTab}
            onClick={() => {
              setActiveTab(index);
            }}
          >
            {tabItem}
          </TabItem>
        ))}
      </TabHeader>
      {childWithProps}
    </>
  );
};

IBuilderCodeTabs.displayName = 'IBuilderCodeTabs';

export default IBuilderCodeTabs;

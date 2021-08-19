import React, { FC } from 'react';
import { get } from 'lodash';
import { useTabs } from 'hooks/useTabs';
import { TabHeader, TabItem } from './IBuilderCodeTabs.styles';
import { getChildWithProps } from './utils';
import { SelectedBlockType } from './types';

type Props = {
  selectedBlock: SelectedBlockType;
  onChangeTab: () => void;
};

export const SelectedLinesContext = React.createContext([]);

const IBuilderCodeTabs: FC<Props> = ({ children, selectedBlock, onChangeTab }) => {
  const { titles, activeTab, setActiveTab } = useTabs({ children, selectedTab: selectedBlock.tab });

  const selectedChild = React.Children.toArray(children)[activeTab] || null;
  const childWithProps =
    get(selectedChild, 'props.title') === selectedBlock.tab
      ? getChildWithProps(selectedChild, { selectedLines: selectedBlock.lines })
      : selectedChild;

  const handelTabClick = (index: number) => () => {
    setActiveTab(index);
    onChangeTab();
  };

  return (
    <>
      <TabHeader>
        {titles.map((tabItem, index) => (
          <TabItem key={tabItem} isSelected={index === activeTab} onClick={handelTabClick(index)}>
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

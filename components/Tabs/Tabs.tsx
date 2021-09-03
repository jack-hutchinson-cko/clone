import { FC, ReactElement } from 'react';

import { useTabs } from 'hooks/useTabs';
import TabHead from './TabHead';
import TabBody from './TabBody';
import { StyledTabs } from './Tabs.styles';

type Props = {
  children: ReactElement[];
};

const Tabs: FC<Props> = ({ children }) => {
  const { titles, activeTab, setActiveTab } = useTabs({ children });

  return (
    <StyledTabs>
      <TabHead titles={titles} activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabBody activeTab={activeTab}>{children}</TabBody>
    </StyledTabs>
  );
};

export default Tabs;

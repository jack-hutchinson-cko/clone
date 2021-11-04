import { FC, ReactElement } from 'react';

import { useTabs } from 'src/hooks/useTabs';
import TabHead from './TabHead';
import TabBody from './TabBody';
import { StyledTabs } from './Tabs.styles';

type Props = {
  children: ReactElement[];
  withBorder?: boolean;
  CEOMode?: boolean;
};

const Tabs: FC<Props> = ({ children, withBorder = false, CEOMode = false }) => {
  const { titles, activeTab, setActiveTab } = useTabs({ children });

  return (
    <StyledTabs>
      <TabHead
        titles={titles}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        withPadding={withBorder}
      />
      <TabBody activeTab={activeTab} CEOMode={CEOMode}>
        {children}
      </TabBody>
    </StyledTabs>
  );
};

export default Tabs;

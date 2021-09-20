import { FC, ReactElement } from 'react';

import { useTabs } from 'hooks/useTabs';
import TabHead from './TabHead';
import TabBody from './TabBody';
import { StyledTabs } from './Tabs.styles';

type Props = {
  children: ReactElement[];
  withBorder?: boolean;
};

const Tabs: FC<Props> = ({ children, withBorder = true }) => {
  const { titles, activeTab, setActiveTab } = useTabs({ children });

  return (
    <StyledTabs withBorder={withBorder}>
      <TabHead
        titles={titles}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        withPadding={withBorder}
      />
      <TabBody activeTab={activeTab}>{children}</TabBody>
    </StyledTabs>
  );
};

export default Tabs;

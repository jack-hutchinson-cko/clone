import React, { FC, useRef, useEffect } from 'react';
import { TabBody } from './IBuilderCodeTabs.styles';

type Props = {
  selectedLines?: never[];
};

const HEIGHT_OF_THE_LINE = 24;

export const SelectedLinesContext = React.createContext([]);

const IBuilderCodeTab: FC<Props> = ({ children, selectedLines = [] }) => {
  const tabBody = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (selectedLines[0] && tabBody.current) {
      tabBody.current.scrollTo(0, (selectedLines[0] - 1) * HEIGHT_OF_THE_LINE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLines[0]]);

  return (
    <TabBody ref={tabBody}>
      <SelectedLinesContext.Provider value={selectedLines}>
        {children}
      </SelectedLinesContext.Provider>
    </TabBody>
  );
};

IBuilderCodeTab.displayName = 'IBuilderCodeTab';

export default IBuilderCodeTab;

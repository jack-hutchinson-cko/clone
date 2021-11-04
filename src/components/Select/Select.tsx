import { FC, ReactElement } from 'react';
import { useTabs } from 'src/hooks/useTabs';

import SelectHead from './SelectHead';
import SelectBody from './SelectBody';

type Props = {
  children: ReactElement[];
};

const Select: FC<Props> = ({ children }) => {
  const { titles, activeTab, setActiveTab } = useTabs({ children });

  return (
    <>
      <SelectHead titles={titles} setActiveTab={setActiveTab} />
      <SelectBody activeTab={activeTab}>{children}</SelectBody>
    </>
  );
};

export default Select;

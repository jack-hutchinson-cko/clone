import { FC, MouseEvent } from 'react';
import { StyledTabHead, StyledTabHeadLink } from './TabHead.styles';

export type Props = {
  headers: string[];
  activeTab?: number | undefined;
  setActiveTab?: (tabIndex: number) => void;
};

const TabHead: FC<Props> = ({ headers = [], activeTab = 0, setActiveTab }) => {
  const onClickHandler = (event: MouseEvent<HTMLAnchorElement>): void => {
    const tabIndex = Number(event.currentTarget?.dataset?.tabIndex);

    event.preventDefault();

    if (!Number.isNaN(tabIndex) && tabIndex !== activeTab && setActiveTab) {
      setActiveTab(tabIndex);
    }
  };

  return (
    <StyledTabHead>
      {headers.map((header, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index}>
          <StyledTabHeadLink
            data-tab-index={index}
            active={activeTab === index}
            onClick={onClickHandler}
          >
            {header}
          </StyledTabHeadLink>
        </li>
      ))}
    </StyledTabHead>
  );
};

export default TabHead;

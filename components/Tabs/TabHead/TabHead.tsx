import { FC, MouseEvent } from 'react';
import { StyledTabHead, StyledTabHeadLink } from './TabHead.styles';

export type Props = {
  titles: string[];
  activeTab: number;
  setActiveTab: (tabIndex: number) => void;
};

const TabHead: FC<Props> = ({ setActiveTab, titles = [], activeTab = 0, ...rest }) => {
  const onClickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    const tabIndex = Number(event.currentTarget?.dataset?.tabIndex);

    event.preventDefault();

    if (!Number.isNaN(tabIndex) && tabIndex !== activeTab) {
      setActiveTab(tabIndex);
    }
  };

  return (
    <StyledTabHead {...rest}>
      {titles.map((title, index) => (
        <li key={title}>
          <StyledTabHeadLink
            data-tab-index={index}
            active={activeTab === index}
            onClick={onClickHandler}
          >
            {title}
          </StyledTabHeadLink>
        </li>
      ))}
    </StyledTabHead>
  );
};

export default TabHead;

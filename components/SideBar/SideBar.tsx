import { FC, ReactNode } from 'react';

export type Props = {
  menuWidget?: ReactNode;
};

const SideBar: FC<Props> = ({ menuWidget }) => <aside>{menuWidget}</aside>;

export default SideBar;

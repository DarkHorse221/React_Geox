import React from 'react';
import { MENU_ITEM } from '..';
import ScrollSpyMenuView from './ScrollSpyMenuView.react';

interface Props {
  menuItems: MENU_ITEM[];
  className?: string;
  offset?: number;
  toggleHandler?: () => void;
}

const ScrollSpyMenu: React.FC<Props> = (props: Props) => {
  return <ScrollSpyMenuView {...props} />;
};

export default ScrollSpyMenu;

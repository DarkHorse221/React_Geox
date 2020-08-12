import React from 'react';
import DrawerView from './DrawerView.react';

interface Props {
  className?: string;
  width?: string;
  isOpen?: boolean;
  toggleHandler?: () => void;
}

const Drawer: React.FC<Props> = (props: Props) => {
  return <DrawerView {...props} />;
};

export default Drawer;

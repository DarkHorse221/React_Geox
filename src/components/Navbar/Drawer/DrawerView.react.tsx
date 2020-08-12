import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import cx from 'classnames';
import RcDrawer from 'rc-drawer';
import 'rc-drawer/assets/index.css';
import React from 'react';
import s from './Drawer.module.scss';

interface Props {
  className?: string;
  closeButton?: React.ReactNode;
  width?: string;
  isOpen?: boolean;
  toggleHandler?: () => void;
}

const DrawerView: React.FC<Props> = ({
  className,
  children,
  isOpen,
  toggleHandler,
  width,
}) => {
  return (
    <div className={className}>
      <RcDrawer
        open={isOpen}
        onClose={toggleHandler}
        className={s.Drawer}
        placement="right"
        onHandleClick={toggleHandler}
        width={width}
      >
        {/* Close button inside drawer */}
        <IconButton className={s.Drawer__CloseButton} onClick={toggleHandler}>
          <CloseIcon className={s.Drawer__CloseButtonIcon} />
        </IconButton>
        {children}
      </RcDrawer>

      {/* Button to open drawer which is visible on Navbar */}
      <div
        onClick={toggleHandler}
        className={cx('reusecore-drawer__handler', {
          [s.Drawer__OpenButton]: true,
        })}
      >
        <MenuIcon className={s.openDrawerBtn} />
      </div>
    </div>
  );
};

export default DrawerView;

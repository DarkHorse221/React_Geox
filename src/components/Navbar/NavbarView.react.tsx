import { Button } from '@material-ui/core';
import Logo from 'assets/icons/logoWithWhiteBg.svg';
import cx from 'classnames';
import { LandingPageSectionID } from 'contants';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Routes } from 'routes/constants';
import Drawer from './Drawer';
import s from './Navbar.module.scss';
import {
  navbarReducer,
  NavbarStateActionType,
  navbarStateInit,
} from './NavbarReducer';
import ScrollSpyMenu from './ScrollSpyMenu';

interface Props {
  history?: History;
}

const NavbarView: React.FC<Props> = (props: Props) => {
  const [navbarState, dispatch] = React.useReducer(
    navbarReducer,
    { isDrawerOpen: false },
    navbarStateInit,
  );

  const toggleHandler = () => {
    dispatch({
      type: NavbarStateActionType.TOGGLE_DRAWER,
    });
  };

  const navbarMenuItems = [
    {
      label: 'Connect Us',
      path: `#${LandingPageSectionID.ConnectUs}`,
      offset: '70',
    },
    {
      label: 'About Us',
      path: `#${LandingPageSectionID.AboutUs}`,
      offset: '70',
    },
    {
      label: 'Product',
      path: `#${LandingPageSectionID.Product}`,
      offset: '70',
    },
  ];

  const onLoginNowClick = () => {
    props.history.push(Routes.LOGIN);
  };

  return (
    <div
      className={cx({
        [s.NavbarContainer]: true,
      })}
    >
      <div className={s.Navbar}>
        {/* Logo */}
        <div className={s.NavbarLogo}>
          <img src={Logo} alt="" />
        </div>

        {/* Menu items on desktop */}
        <div className={s.NavbarMenu}>
          <ScrollSpyMenu
            menuItems={navbarMenuItems}
            offset={-window.innerHeight / 3}
          />
        </div>

        {/* Drawer for mobile */}
        <Drawer
          width="300px"
          isOpen={navbarState.isDrawerOpen}
          toggleHandler={toggleHandler}
          className={s.NavbarMenuMobile}
        >
          <ScrollSpyMenu
            menuItems={navbarMenuItems}
            toggleHandler={toggleHandler}
            offset={-100}
          />
        </Drawer>

        <div className={s.LoginButtonContainer}>
          <Button variant="outlined" onClick={onLoginNowClick}>
            Login Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(NavbarView);

import { Button, Menu, MenuItem } from '@material-ui/core';
import logoWithWhiteBg from 'assets/icons/logoWithWhiteBg.svg';
import Link, { LinkType } from 'components/Basic/Link';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Routes } from 'routes/constants';
import { AuthUser } from 'types/Auth';
import s from './PrivateNavbar.module.scss';
import {
  privateNavbarReducer,
  privateNavbarStateInit,
} from './PrivateNavbarReducer';
import { logout } from './PrivateNavbarUtil';

interface Props {
  history?: History;
  authUser: AuthUser;
  removeAuthUser: () => void;
}

const PrivateNavbarView: React.FC<Props> = (props: Props) => {
  const [privateNavbarState, dispatch] = React.useReducer(
    privateNavbarReducer,
    {},
    privateNavbarStateInit,
  );

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMouseHover = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    setAnchorEl(null);
    try {
      await logout();
      props.removeAuthUser();
    } catch (err) {
      console.error('err :>> ', err);
    }
  };

  const handleOnProfileClick = () => {
    props.history.push(Routes.USER_PROFILE);
    handleClose();
  };

  return (
    <div className={s.PrivateNavbar}>
      <div className={s.PrivateNavbarContainer}>
        <div className={s.PrivateNavbar_Logo}>
          <img src={logoWithWhiteBg} alt="" />
        </div>
        <div className={s.NavbarLinks}>
          <Link to={Routes.PRODUCT} type={LinkType.WHITE}>
            Product
          </Link>
          <Link to={Routes.ABOUT_US} type={LinkType.WHITE}>
            About Us
          </Link>
          <Link to={Routes.PROJECTS} type={LinkType.WHITE}>
            My Projects
          </Link>
          <Link to={Routes.PACKAGE} type={LinkType.WHITE}>
            Package
          </Link>
          <Link to={Routes.API_CONNECT} type={LinkType.WHITE}>
            API access
          </Link>
        </div>

        {/* Menu */}
        <div className={s.ProfileMenu}>
          <Button
            onMouseOver={handleMouseHover}
            className={s.ProfileMenu_Button}
            variant="outlined"
          >
            Profile
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className={s.PopoverClass}
          >
            <MenuItem onClick={handleOnProfileClick}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(PrivateNavbarView);

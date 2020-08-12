import { AppContext } from 'app';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import NavbarView from './NavbarView.react';

interface Props {
  history?: History;
}

const Navbar: React.FC<Props> = (props: Props) => {
  const [appState] = React.useContext(AppContext);

  return <NavbarView {...props} />;
};

Navbar.defaultProps = {};

export default compose<Props, Props>(withRouter)(Navbar);

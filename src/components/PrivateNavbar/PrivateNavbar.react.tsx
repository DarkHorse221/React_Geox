import { AppContext, AppStateActionType } from 'app';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import PrivateNavbarView from './PrivateNavbarView.react';

interface Props {
  history?: History;
}

const PrivateNavbar: React.FC<Props> = (props: Props) => {
  const [appState, dispatch] = React.useContext(AppContext);
  const removeAuthUser = () => {
    dispatch({
      type: AppStateActionType.SET_AUTH_USER,
      authUser: undefined,
    });
  };

  return (
    <PrivateNavbarView
      {...props}
      authUser={appState.authUser}
      removeAuthUser={removeAuthUser}
    />
  );
};

PrivateNavbar.defaultProps = {};

export default compose<Props, Props>(withRouter)(PrivateNavbar);

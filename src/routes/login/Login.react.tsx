import { AppContext, AppStateActionType } from 'app';
import LoadingView from 'components/Basic/LoadingView';
import { History, Location } from 'history';
import React from 'react';
import { match, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { AuthUser } from 'types/Auth';
import LoginView from './LoginView.react';

/** Make sure to add your default props to the defaultProps object at the bottom */
interface Props {
  location?: Location;
  match?: match;
  history?: History;
}

const Login: React.FC<Props> = (props: Props) => {
  const [appState, dispatch] = React.useContext(AppContext);
  const setAuthUser = (authUser: AuthUser) => {
    dispatch({
      type: AppStateActionType.SET_AUTH_USER,
      authUser,
    });
  };

  if (appState.isLoading) {
    return <LoadingView />;
  }

  return <LoginView setAuthUser={setAuthUser} />;
};

Login.defaultProps = {};

export default compose<Props, Props>(withRouter)(Login);

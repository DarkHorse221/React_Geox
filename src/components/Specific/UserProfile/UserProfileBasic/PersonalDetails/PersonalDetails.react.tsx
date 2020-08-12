import { AppContext, AppStateActionType } from 'app';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { AuthUser } from 'types/Auth';
import PersonalDetailsView from './PersonalDetailsView.react';

interface Props {
  history?: History;
}

const PersonalDetails: React.FC<Props> = (props: Props) => {
  const [appState, dispatch] = React.useContext(AppContext);
  const setAuthUser = (authUser: AuthUser) => {
    dispatch({
      type: AppStateActionType.SET_AUTH_USER,
      authUser,
    });
  };

  return (
    <PersonalDetailsView
      {...props}
      authUser={appState.authUser}
      setAuthUser={setAuthUser}
    />
  );
};

PersonalDetails.defaultProps = {};

export default compose<Props, Props>(withRouter)(PersonalDetails);

import { History } from 'history';
import React, { useEffect } from 'react';
import { AuthUser } from 'types/Auth';
import { AppContext } from './App.react';
import './App.scss';
import { appReducer, AppStateActionType, appStateInit } from './AppReducer';
import AppRouter from './AppRouter.react';

interface Props {
  history?: History;
  authUser: AuthUser;
}

const AppView: React.FC<Props> = (props: Props) => {
  const [appState, dispatch] = React.useReducer(
    appReducer,
    {
      isLoading: false,
    },
    appStateInit,
  );

  useEffect(() => {
    dispatch({
      type: AppStateActionType.SET_AUTH_USER,
      authUser: props.authUser,
    });
  }, [props.authUser]);

  return (
    <div className="theme-light">
      <AppContext.Provider value={[appState, dispatch]}>
        <AppRouter />
      </AppContext.Provider>
    </div>
  );
};

export default AppView;

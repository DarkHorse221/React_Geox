import produce from 'immer';
import { AuthUser } from 'types/Auth';

export interface AppState {
  isLoading: boolean;
  authUser?: AuthUser;
}

enum AppStateActionType {
  SET_AUTH_USER = 'SET_AUTH_USER',
}

export interface AppStateAction {
  type: AppStateActionType;
  authUser?: AuthUser;
}

const appStateInit = (initialState: AppState): AppState => {
  return {
    isLoading: false,
    ...initialState,
  };
};

const appReducer = (state: AppState, action: AppStateAction): AppState =>
  produce(state, draft => {
    switch (action.type) {
      case AppStateActionType.SET_AUTH_USER:
        draft.authUser = action.authUser;
        break;
      default:
        draft.isLoading = false;
    }
  });

export { AppStateActionType, appStateInit, appReducer };

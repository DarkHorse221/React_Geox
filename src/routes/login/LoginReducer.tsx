import produce from 'immer';

interface LoginState {
  errorMessage?: string;
}

enum LoginStateActionTypes {
  SET_ERROR = 'SET_ERROR',
}

interface LoginStateAction {
  type: LoginStateActionTypes;
  errorMessage?: string;
}

const loginStateInit = (initialState: LoginState): LoginState => {
  return {
    ...initialState,
  };
};

const loginReducer = (
  state: LoginState,
  action: LoginStateAction,
): LoginState =>
  produce(state, (draft: LoginState) => {
    switch (action.type) {
      case LoginStateActionTypes.SET_ERROR:
        draft.errorMessage = action.errorMessage;
        break;
    }
  });

export { LoginStateActionTypes, loginStateInit, loginReducer };

import produce from 'immer';

interface PasswordState {
  errorMessage?: string;
}

enum PasswordStateActionType {
  SET_ERROR = 'SET_ERROR',
}

type PasswordStateAction = {
  type: PasswordStateActionType;
  errorMessage?: string;
};

const passwordStateInit = (initialState: PasswordState): PasswordState => {
  return {
    ...initialState,
  };
};

const passwordReducer = (
  state: PasswordState,
  action: PasswordStateAction,
): PasswordState =>
  produce(state, draft => {
    switch (action.type) {
      case PasswordStateActionType.SET_ERROR:
        draft.errorMessage = action.errorMessage;
        break;
    }
  });

export { PasswordStateActionType, passwordStateInit, passwordReducer };

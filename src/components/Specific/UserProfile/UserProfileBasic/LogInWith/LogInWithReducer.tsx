interface LogInWithState { }

enum LogInWithStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type LogInWithStateAction = {
  type: LogInWithStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const logInWithStateInit = (
  initialState: LogInWithState,
): LogInWithState => {
  return {
    ...initialState
  };
};

const logInWithReducer = (
  state: LogInWithState,
  action: LogInWithStateAction,
): LogInWithState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  LogInWithStateActionType,
  logInWithStateInit,
  logInWithReducer,
};
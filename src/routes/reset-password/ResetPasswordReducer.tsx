interface ResetPasswordState { }

enum ResetPasswordStateActionTypes { }

interface ResetPasswordStateAction {
  type: ResetPasswordStateActionTypes;
}

const resetPasswordStateInit = (
  initialState: ResetPasswordState,
): ResetPasswordState => {
  return {
    ...initialState
  };
};

const resetPasswordReducer = (
  state: ResetPasswordState,
  action: ResetPasswordStateAction,
): ResetPasswordState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  ResetPasswordStateActionTypes,
  resetPasswordStateInit,
  resetPasswordReducer,
};
interface ForgetPasswordState { }

enum ForgetPasswordStateActionTypes { }

interface ForgetPasswordStateAction {
  type: ForgetPasswordStateActionTypes;
}

const forgetPasswordStateInit = (
  initialState: ForgetPasswordState,
): ForgetPasswordState => {
  return {
    ...initialState
  };
};

const forgetPasswordReducer = (
  state: ForgetPasswordState,
  action: ForgetPasswordStateAction,
): ForgetPasswordState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  ForgetPasswordStateActionTypes,
  forgetPasswordStateInit,
  forgetPasswordReducer,
};
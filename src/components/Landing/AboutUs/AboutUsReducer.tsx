interface AboutUsState { }

enum AboutUsStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type AboutUsStateAction = {
  type: AboutUsStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const aboutUsStateInit = (
  initialState: AboutUsState,
): AboutUsState => {
  return {
    ...initialState
  };
};

const aboutUsReducer = (
  state: AboutUsState,
  action: AboutUsStateAction,
): AboutUsState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  AboutUsStateActionType,
  aboutUsStateInit,
  aboutUsReducer,
};
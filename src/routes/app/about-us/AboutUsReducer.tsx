interface AboutUsState { }

enum AboutUsStateActionTypes { }

interface AboutUsStateAction {
  type: AboutUsStateActionTypes;
}

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
  AboutUsStateActionTypes,
  aboutUsStateInit,
  aboutUsReducer,
};
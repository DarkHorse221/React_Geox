interface FooterState { }

enum FooterStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type FooterStateAction = {
  type: FooterStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const footerStateInit = (
  initialState: FooterState,
): FooterState => {
  return {
    ...initialState
  };
};

const footerReducer = (
  state: FooterState,
  action: FooterStateAction,
): FooterState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  FooterStateActionType,
  footerStateInit,
  footerReducer,
};
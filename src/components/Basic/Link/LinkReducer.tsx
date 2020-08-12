interface LinkState { }

enum LinkStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type LinkStateAction = {
  type: LinkStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const linkStateInit = (
  initialState: LinkState,
): LinkState => {
  return {
    ...initialState
  };
};

const linkReducer = (
  state: LinkState,
  action: LinkStateAction,
): LinkState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  LinkStateActionType,
  linkStateInit,
  linkReducer,
};
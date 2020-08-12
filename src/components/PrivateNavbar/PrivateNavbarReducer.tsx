interface PrivateNavbarState { }

enum PrivateNavbarStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type PrivateNavbarStateAction = {
  type: PrivateNavbarStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const privateNavbarStateInit = (
  initialState: PrivateNavbarState,
): PrivateNavbarState => {
  return {
    ...initialState
  };
};

const privateNavbarReducer = (
  state: PrivateNavbarState,
  action: PrivateNavbarStateAction,
): PrivateNavbarState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  PrivateNavbarStateActionType,
  privateNavbarStateInit,
  privateNavbarReducer,
};
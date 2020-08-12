interface WhiteCardState { }

enum WhiteCardStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type WhiteCardStateAction = {
  type: WhiteCardStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const whiteCardStateInit = (
  initialState: WhiteCardState,
): WhiteCardState => {
  return {
    ...initialState
  };
};

const whiteCardReducer = (
  state: WhiteCardState,
  action: WhiteCardStateAction,
): WhiteCardState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  WhiteCardStateActionType,
  whiteCardStateInit,
  whiteCardReducer,
};
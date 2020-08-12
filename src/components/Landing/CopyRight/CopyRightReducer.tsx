interface CopyRightState { }

enum CopyRightStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type CopyRightStateAction = {
  type: CopyRightStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const copyRightStateInit = (
  initialState: CopyRightState,
): CopyRightState => {
  return {
    ...initialState
  };
};

const copyRightReducer = (
  state: CopyRightState,
  action: CopyRightStateAction,
): CopyRightState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  CopyRightStateActionType,
  copyRightStateInit,
  copyRightReducer,
};
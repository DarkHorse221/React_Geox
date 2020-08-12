interface OurSolutionState { }

enum OurSolutionStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type OurSolutionStateAction = {
  type: OurSolutionStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const ourSolutionStateInit = (
  initialState: OurSolutionState,
): OurSolutionState => {
  return {
    ...initialState
  };
};

const ourSolutionReducer = (
  state: OurSolutionState,
  action: OurSolutionStateAction,
): OurSolutionState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  OurSolutionStateActionType,
  ourSolutionStateInit,
  ourSolutionReducer,
};
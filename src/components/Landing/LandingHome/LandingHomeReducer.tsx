interface LandingHomeState { }

// TODO: Replace DO_SOMETHING with appropriate action or remove if no actions are needed.
enum LandingHomeStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

/** TODO: Replace actionSpecificArg with appropriate argument for the action or remove if not needed.
  * Use union types (|) to specify signatures for other actions.
  */
type LandingHomeStateAction = {
  type: LandingHomeStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const landingHomeStateInit = (
  initialState: LandingHomeState,
): LandingHomeState => {
  return {
    ...initialState
  };
};

const landingHomeReducer = (
  state: LandingHomeState,
  action: LandingHomeStateAction,
): LandingHomeState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  LandingHomeStateActionType,
  landingHomeStateInit,
  landingHomeReducer,
};
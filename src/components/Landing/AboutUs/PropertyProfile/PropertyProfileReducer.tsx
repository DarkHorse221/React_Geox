interface PropertyProfileState { }

enum PropertyProfileStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type PropertyProfileStateAction = {
  type: PropertyProfileStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const propertyProfileStateInit = (
  initialState: PropertyProfileState,
): PropertyProfileState => {
  return {
    ...initialState
  };
};

const propertyProfileReducer = (
  state: PropertyProfileState,
  action: PropertyProfileStateAction,
): PropertyProfileState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  PropertyProfileStateActionType,
  propertyProfileStateInit,
  propertyProfileReducer,
};
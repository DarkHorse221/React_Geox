interface CheckboxState { }

enum CheckboxStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type CheckboxStateAction = {
  type: CheckboxStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const checkboxStateInit = (
  initialState: CheckboxState,
): CheckboxState => {
  return {
    ...initialState
  };
};

const checkboxReducer = (
  state: CheckboxState,
  action: CheckboxStateAction,
): CheckboxState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  CheckboxStateActionType,
  checkboxStateInit,
  checkboxReducer,
};
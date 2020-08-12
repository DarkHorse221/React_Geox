interface OurCustomerState { }

enum OurCustomerStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type OurCustomerStateAction = {
  type: OurCustomerStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const ourCustomerStateInit = (
  initialState: OurCustomerState,
): OurCustomerState => {
  return {
    ...initialState
  };
};

const ourCustomerReducer = (
  state: OurCustomerState,
  action: OurCustomerStateAction,
): OurCustomerState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  OurCustomerStateActionType,
  ourCustomerStateInit,
  ourCustomerReducer,
};
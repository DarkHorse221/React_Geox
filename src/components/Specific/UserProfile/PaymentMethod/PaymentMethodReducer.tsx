interface PaymentMethodState { }

enum PaymentMethodStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type PaymentMethodStateAction = {
  type: PaymentMethodStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const paymentMethodStateInit = (
  initialState: PaymentMethodState,
): PaymentMethodState => {
  return {
    ...initialState
  };
};

const paymentMethodReducer = (
  state: PaymentMethodState,
  action: PaymentMethodStateAction,
): PaymentMethodState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  PaymentMethodStateActionType,
  paymentMethodStateInit,
  paymentMethodReducer,
};
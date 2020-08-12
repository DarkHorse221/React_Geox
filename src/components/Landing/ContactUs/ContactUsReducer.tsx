interface ContactUsState { }

enum ContactUsStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type ContactUsStateAction = {
  type: ContactUsStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const contactUsStateInit = (
  initialState: ContactUsState,
): ContactUsState => {
  return {
    ...initialState
  };
};

const contactUsReducer = (
  state: ContactUsState,
  action: ContactUsStateAction,
): ContactUsState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  ContactUsStateActionType,
  contactUsStateInit,
  contactUsReducer,
};
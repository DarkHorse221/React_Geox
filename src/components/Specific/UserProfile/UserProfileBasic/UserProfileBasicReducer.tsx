interface UserProfileBasicState { }

enum UserProfileBasicStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type UserProfileBasicStateAction = {
  type: UserProfileBasicStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const userProfileBasicStateInit = (
  initialState: UserProfileBasicState,
): UserProfileBasicState => {
  return {
    ...initialState
  };
};

const userProfileBasicReducer = (
  state: UserProfileBasicState,
  action: UserProfileBasicStateAction,
): UserProfileBasicState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  UserProfileBasicStateActionType,
  userProfileBasicStateInit,
  userProfileBasicReducer,
};
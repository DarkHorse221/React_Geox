interface UserProfileState { }

enum UserProfileStateActionTypes { }

interface UserProfileStateAction {
  type: UserProfileStateActionTypes;
}

const userProfileStateInit = (
  initialState: UserProfileState,
): UserProfileState => {
  return {
    ...initialState
  };
};

const userProfileReducer = (
  state: UserProfileState,
  action: UserProfileStateAction,
): UserProfileState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  UserProfileStateActionTypes,
  userProfileStateInit,
  userProfileReducer,
};
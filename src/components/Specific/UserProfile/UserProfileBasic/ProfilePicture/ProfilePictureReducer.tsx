interface ProfilePictureState { }

enum ProfilePictureStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type ProfilePictureStateAction = {
  type: ProfilePictureStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const profilePictureStateInit = (
  initialState: ProfilePictureState,
): ProfilePictureState => {
  return {
    ...initialState
  };
};

const profilePictureReducer = (
  state: ProfilePictureState,
  action: ProfilePictureStateAction,
): ProfilePictureState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  ProfilePictureStateActionType,
  profilePictureStateInit,
  profilePictureReducer,
};
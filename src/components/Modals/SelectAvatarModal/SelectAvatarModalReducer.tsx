interface SelectAvatarModalState { }

enum SelectAvatarModalStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type SelectAvatarModalStateAction = {
  type: SelectAvatarModalStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const selectAvatarModalStateInit = (
  initialState: SelectAvatarModalState,
): SelectAvatarModalState => {
  return {
    ...initialState
  };
};

const selectAvatarModalReducer = (
  state: SelectAvatarModalState,
  action: SelectAvatarModalStateAction,
): SelectAvatarModalState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  SelectAvatarModalStateActionType,
  selectAvatarModalStateInit,
  selectAvatarModalReducer,
};
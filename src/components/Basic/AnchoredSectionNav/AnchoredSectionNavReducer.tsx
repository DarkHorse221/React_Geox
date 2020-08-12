interface AnchoredSectionNavState { }

enum AnchoredSectionNavStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type AnchoredSectionNavStateAction = {
  type: AnchoredSectionNavStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const anchoredSectionNavStateInit = (
  initialState: AnchoredSectionNavState,
): AnchoredSectionNavState => {
  return {
    ...initialState
  };
};

const anchoredSectionNavReducer = (
  state: AnchoredSectionNavState,
  action: AnchoredSectionNavStateAction,
): AnchoredSectionNavState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  AnchoredSectionNavStateActionType,
  anchoredSectionNavStateInit,
  anchoredSectionNavReducer,
};
interface ApiSectionState { }

enum ApiSectionStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type ApiSectionStateAction = {
  type: ApiSectionStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const apiSectionStateInit = (
  initialState: ApiSectionState,
): ApiSectionState => {
  return {
    ...initialState
  };
};

const apiSectionReducer = (
  state: ApiSectionState,
  action: ApiSectionStateAction,
): ApiSectionState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  ApiSectionStateActionType,
  apiSectionStateInit,
  apiSectionReducer,
};
interface AppState { }

enum AppStateActionTypes { }

interface AppStateAction {
  type: AppStateActionTypes;
}

const appStateInit = (
  initialState: AppState,
): AppState => {
  return {
    ...initialState
  };
};

const appReducer = (
  state: AppState,
  action: AppStateAction,
): AppState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  AppStateActionTypes,
  appStateInit,
  appReducer,
};
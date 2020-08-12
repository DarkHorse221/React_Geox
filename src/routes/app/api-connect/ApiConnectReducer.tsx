interface ApiConnectState { }

enum ApiConnectStateActionTypes { }

interface ApiConnectStateAction {
  type: ApiConnectStateActionTypes;
}

const apiConnectStateInit = (
  initialState: ApiConnectState,
): ApiConnectState => {
  return {
    ...initialState
  };
};

const apiConnectReducer = (
  state: ApiConnectState,
  action: ApiConnectStateAction,
): ApiConnectState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  ApiConnectStateActionTypes,
  apiConnectStateInit,
  apiConnectReducer,
};
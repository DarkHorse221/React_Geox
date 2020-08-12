interface GeoXTextFieldState { }

enum GeoXTextFieldStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type GeoXTextFieldStateAction = {
  type: GeoXTextFieldStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const geoXTextFieldStateInit = (
  initialState: GeoXTextFieldState,
): GeoXTextFieldState => {
  return {
    ...initialState
  };
};

const geoXTextFieldReducer = (
  state: GeoXTextFieldState,
  action: GeoXTextFieldStateAction,
): GeoXTextFieldState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  GeoXTextFieldStateActionType,
  geoXTextFieldStateInit,
  geoXTextFieldReducer,
};
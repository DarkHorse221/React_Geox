interface GeoXTextAreaState { }

enum GeoXTextAreaStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type GeoXTextAreaStateAction = {
  type: GeoXTextAreaStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const geoXTextAreaStateInit = (
  initialState: GeoXTextAreaState,
): GeoXTextAreaState => {
  return {
    ...initialState
  };
};

const geoXTextAreaReducer = (
  state: GeoXTextAreaState,
  action: GeoXTextAreaStateAction,
): GeoXTextAreaState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  GeoXTextAreaStateActionType,
  geoXTextAreaStateInit,
  geoXTextAreaReducer,
};
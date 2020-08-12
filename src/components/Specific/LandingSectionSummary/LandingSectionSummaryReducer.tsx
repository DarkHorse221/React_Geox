interface LandingSectionSummaryState { }

enum LandingSectionSummaryStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type LandingSectionSummaryStateAction = {
  type: LandingSectionSummaryStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const landingSectionSummaryStateInit = (
  initialState: LandingSectionSummaryState,
): LandingSectionSummaryState => {
  return {
    ...initialState
  };
};

const landingSectionSummaryReducer = (
  state: LandingSectionSummaryState,
  action: LandingSectionSummaryStateAction,
): LandingSectionSummaryState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  LandingSectionSummaryStateActionType,
  landingSectionSummaryStateInit,
  landingSectionSummaryReducer,
};
interface FeatureState {}

enum FeatureStateActionType {
  DO_SOMETHING = 'DO_SOMETHING',
}

type FeatureStateAction = {
  type: FeatureStateActionType.DO_SOMETHING;
  actionSpecificArg: string;
};

const FeatureStateInit = (initialState: FeatureState): FeatureState => {
  return {
    ...initialState,
  };
};

const FeatureReducer = (
  state: FeatureState,
  action: FeatureStateAction,
): FeatureState => {
  switch (action.type) {
    default:
      return state;
  }
};

export { FeatureStateActionType, FeatureStateInit, FeatureReducer };

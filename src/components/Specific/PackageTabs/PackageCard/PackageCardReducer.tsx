interface PackageCardState { }

enum PackageCardStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type PackageCardStateAction = {
  type: PackageCardStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const packageCardStateInit = (
  initialState: PackageCardState,
): PackageCardState => {
  return {
    ...initialState
  };
};

const packageCardReducer = (
  state: PackageCardState,
  action: PackageCardStateAction,
): PackageCardState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  PackageCardStateActionType,
  packageCardStateInit,
  packageCardReducer,
};
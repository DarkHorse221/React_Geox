interface PackageTabsState { }

enum PackageTabsStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type PackageTabsStateAction = {
  type: PackageTabsStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const packageTabsStateInit = (
  initialState: PackageTabsState,
): PackageTabsState => {
  return {
    ...initialState
  };
};

const packageTabsReducer = (
  state: PackageTabsState,
  action: PackageTabsStateAction,
): PackageTabsState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  PackageTabsStateActionType,
  packageTabsStateInit,
  packageTabsReducer,
};
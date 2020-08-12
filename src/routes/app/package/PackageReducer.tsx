interface PackageState { }

enum PackageStateActionTypes { }

interface PackageStateAction {
  type: PackageStateActionTypes;
}

const packageStateInit = (
  initialState: PackageState,
): PackageState => {
  return {
    ...initialState
  };
};

const packageReducer = (
  state: PackageState,
  action: PackageStateAction,
): PackageState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  PackageStateActionTypes,
  packageStateInit,
  packageReducer,
};
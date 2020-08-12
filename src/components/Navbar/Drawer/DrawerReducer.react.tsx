interface DrawerState {}

enum DrawerStateActionTypes {}

interface DrawerStateAction {
  type: DrawerStateActionTypes;
}

const drawerStateInit = (initialState: DrawerState): DrawerState => {
  return {
    ...initialState,
  };
};

const drawerReducer = (
  state: DrawerState,
  action: DrawerStateAction,
): DrawerState => {
  switch (action.type) {
    default:
      return state;
  }
};

export { DrawerStateActionTypes, drawerStateInit, drawerReducer };

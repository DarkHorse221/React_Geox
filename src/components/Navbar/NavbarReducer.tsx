interface NavbarState {
  isDrawerOpen: boolean;
}

enum NavbarStateActionType {
  TOGGLE_DRAWER = 'TOGGLE_DRAWER',
}

type NavbarStateAction = {
  type: NavbarStateActionType;
};

const navbarStateInit = (initialState: NavbarState): NavbarState => {
  return {
    ...initialState,
  };
};

const navbarReducer = (
  state: NavbarState,
  action: NavbarStateAction,
): NavbarState => {
  switch (action.type) {
    case NavbarStateActionType.TOGGLE_DRAWER:
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen,
      };
    default:
      return state;
  }
};

export { NavbarStateActionType, navbarStateInit, navbarReducer };

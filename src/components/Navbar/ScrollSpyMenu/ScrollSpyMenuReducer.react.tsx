interface ScrollSpyMenuState {}

enum ScrollSpyMenuStateActionTypes {}

interface ScrollSpyMenuStateAction {
  type: ScrollSpyMenuStateActionTypes;
}

const scrollSpyMenuStateInit = (
  initialState: ScrollSpyMenuState,
): ScrollSpyMenuState => {
  return {
    ...initialState,
  };
};

const scrollSpyMenuReducer = (
  state: ScrollSpyMenuState,
  action: ScrollSpyMenuStateAction,
): ScrollSpyMenuState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  ScrollSpyMenuStateActionTypes,
  scrollSpyMenuStateInit,
  scrollSpyMenuReducer,
};

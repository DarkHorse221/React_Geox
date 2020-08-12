interface TabsState { }

enum TabsStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type TabsStateAction = {
  type: TabsStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const tabsStateInit = (
  initialState: TabsState,
): TabsState => {
  return {
    ...initialState
  };
};

const tabsReducer = (
  state: TabsState,
  action: TabsStateAction,
): TabsState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  TabsStateActionType,
  tabsStateInit,
  tabsReducer,
};
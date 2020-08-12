interface TableState { }

enum TableStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type TableStateAction = {
  type: TableStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const tableStateInit = (
  initialState: TableState,
): TableState => {
  return {
    ...initialState
  };
};

const tableReducer = (
  state: TableState,
  action: TableStateAction,
): TableState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  TableStateActionType,
  tableStateInit,
  tableReducer,
};
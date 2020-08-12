interface TransactionHistoryState { }

enum TransactionHistoryStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type TransactionHistoryStateAction = {
  type: TransactionHistoryStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const transactionHistoryStateInit = (
  initialState: TransactionHistoryState,
): TransactionHistoryState => {
  return {
    ...initialState
  };
};

const transactionHistoryReducer = (
  state: TransactionHistoryState,
  action: TransactionHistoryStateAction,
): TransactionHistoryState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  TransactionHistoryStateActionType,
  transactionHistoryStateInit,
  transactionHistoryReducer,
};
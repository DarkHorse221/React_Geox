interface MyPlanState { }

enum MyPlanStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type MyPlanStateAction = {
  type: MyPlanStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const myPlanStateInit = (
  initialState: MyPlanState,
): MyPlanState => {
  return {
    ...initialState
  };
};

const myPlanReducer = (
  state: MyPlanState,
  action: MyPlanStateAction,
): MyPlanState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  MyPlanStateActionType,
  myPlanStateInit,
  myPlanReducer,
};
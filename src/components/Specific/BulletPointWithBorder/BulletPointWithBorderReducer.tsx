interface BulletPointWithBorderState { }

enum BulletPointWithBorderStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type BulletPointWithBorderStateAction = {
  type: BulletPointWithBorderStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const bulletPointWithBorderStateInit = (
  initialState: BulletPointWithBorderState,
): BulletPointWithBorderState => {
  return {
    ...initialState
  };
};

const bulletPointWithBorderReducer = (
  state: BulletPointWithBorderState,
  action: BulletPointWithBorderStateAction,
): BulletPointWithBorderState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  BulletPointWithBorderStateActionType,
  bulletPointWithBorderStateInit,
  bulletPointWithBorderReducer,
};
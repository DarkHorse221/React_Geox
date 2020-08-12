interface ImagePickerState { }

enum ImagePickerStateActionType { 
  DO_SOMETHING = 'DO_SOMETHING', 
};

type ImagePickerStateAction = {
  type: ImagePickerStateActionType.DO_SOMETHING; actionSpecificArg: string;
};

const imagePickerStateInit = (
  initialState: ImagePickerState,
): ImagePickerState => {
  return {
    ...initialState
  };
};

const imagePickerReducer = (
  state: ImagePickerState,
  action: ImagePickerStateAction,
): ImagePickerState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  ImagePickerStateActionType,
  imagePickerStateInit,
  imagePickerReducer,
};
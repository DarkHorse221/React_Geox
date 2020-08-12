interface ProductState { }

enum ProductStateActionTypes { }

interface ProductStateAction {
  type: ProductStateActionTypes;
}

const productStateInit = (
  initialState: ProductState,
): ProductState => {
  return {
    ...initialState
  };
};

const productReducer = (
  state: ProductState,
  action: ProductStateAction,
): ProductState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  ProductStateActionTypes,
  productStateInit,
  productReducer,
};
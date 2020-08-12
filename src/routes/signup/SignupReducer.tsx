import { SelectItemType } from 'components/Basic/Form/Select';
import produce from 'immer';

interface SignupState {
  countries?: SelectItemType[];
  cities?: SelectItemType[];
  states?: SelectItemType[];
  errorMessage?: string;
}

enum SignupStateActionTypes {
  SET_COUNTRIES = 'SET_COUNTRIES',
  SET_CITIES = 'SET_CITIES',
  SET_STATES = 'SET_STATES',
  SET_ERROR = 'SET_ERROR',
}

interface SignupStateAction {
  type: SignupStateActionTypes;
  data?: SelectItemType[];
  errorMessage?: string;
}

const signupStateInit = (initialState: SignupState): SignupState => {
  return {
    countries: [],
    cities: [],
    states: [],
    ...initialState,
  };
};

const signupReducer = (
  state: SignupState,
  action: SignupStateAction,
): SignupState =>
  produce(state, draft => {
    switch (action.type) {
      case SignupStateActionTypes.SET_CITIES:
        draft.cities = action.data;
        break;
      case SignupStateActionTypes.SET_COUNTRIES:
        draft.countries = action.data;
        break;
      case SignupStateActionTypes.SET_STATES:
        draft.states = action.data;
        break;
      case SignupStateActionTypes.SET_ERROR:
        draft.errorMessage = action.errorMessage;
        break;
    }
  });

export { SignupStateActionTypes, signupStateInit, signupReducer };

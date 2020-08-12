import { SelectItemType } from 'components/Basic/Form/Select';
import produce from 'immer';

interface PersonalDetailsState {
  countries?: SelectItemType[];
  cities?: SelectItemType[];
  states?: SelectItemType[];
  errorMessage?: string;
}

enum PersonalDetailsStateActionType {
  SET_COUNTRIES = 'SET_COUNTRIES',
  SET_CITIES = 'SET_CITIES',
  SET_STATES = 'SET_STATES',
  SET_ERROR = 'SET_ERROR',
}

type PersonalDetailsStateAction = {
  type: PersonalDetailsStateActionType;
  data?: SelectItemType[];
  errorMessage?: string;
};

const personalDetailsStateInit = (
  initialState: PersonalDetailsState,
): PersonalDetailsState => {
  return {
    countries: [],
    cities: [],
    states: [],
    ...initialState,
  };
};

const personalDetailsReducer = (
  state: PersonalDetailsState,
  action: PersonalDetailsStateAction,
): PersonalDetailsState =>
  produce(state, draft => {
    switch (action.type) {
      case PersonalDetailsStateActionType.SET_CITIES:
        draft.cities = action.data;
        break;
      case PersonalDetailsStateActionType.SET_COUNTRIES:
        draft.countries = action.data;
        break;
      case PersonalDetailsStateActionType.SET_STATES:
        draft.states = action.data;
        break;
      case PersonalDetailsStateActionType.SET_ERROR:
        draft.errorMessage = action.errorMessage;
        break;
    }
  });

export {
  PersonalDetailsStateActionType,
  personalDetailsStateInit,
  personalDetailsReducer,
};

import csc from 'country-state-city';
import { AuthUser } from 'types/Auth';

export const getCountryIdFromName = (name: string) => {
  const countries = csc.getAllCountries();
  for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    if (country.name.toLowerCase() === name.toLowerCase()) {
      return `${country.id}`;
    }
  }
};

export const getStateIdFromName = (countryId: string, stateName: string) => {
  const states = csc.getStatesOfCountry(countryId);
  for (let i = 0; i < states.length; i++) {
    const state = states[i];
    if (state.name.toLowerCase() === stateName.toLowerCase()) {
      return `${state.id}`;
    }
  }
};

export const getCityIdFromName = (stateID: string, cityName: string) => {
  const cities = csc.getCitiesOfState(stateID);
  for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    if (city.name.toLowerCase() === cityName.toLowerCase()) {
      return `${city.id}`;
    }
  }
};

export const replaceCountryStateCityNameWithID = (authUser: AuthUser) => {
  authUser.country = getCountryIdFromName(authUser.country);
  authUser.state = getStateIdFromName(authUser.country, authUser.state);
  authUser.city = getCityIdFromName(authUser.state, authUser.city);
  return authUser;
};

export default {
  getCountryIdFromName,
  getStateIdFromName,
  getCityIdFromName,
};

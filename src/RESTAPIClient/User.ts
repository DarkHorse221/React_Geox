import Axios from 'axios';
import { AuthUser } from 'types/Auth';
import { replaceCountryStateCityNameWithID } from 'Utils/CountryStateCity';

class User {
  static getUserDetails = async (): Promise<AuthUser> => {
    const response = await Axios.get('/customer');
    const authUser: AuthUser = response.data.data;
    replaceCountryStateCityNameWithID(authUser);
    return authUser;
  };

  static updateUserDetails = async data => {
    const response = await Axios.patch('/customer', data);
    const authUser: AuthUser = response.data.data;
    replaceCountryStateCityNameWithID(authUser);
    return authUser;
  };

  static changePassword = async data => {
    await Axios.post('/customer/password', data);
  };

  static uploadProfilePicture = async ({
    type,
    profile,
    avatar_name,
  }: {
    type: 'profile_pic' | 'avatar';
    profile?: File;
    avatar_name?: string;
  }) => {
    const formData = new FormData();
    formData.append('type', type);
    if (type == 'profile_pic') {
      formData.append('profile', profile);
    } else {
      formData.append('avatar_name', avatar_name);
    }

    await Axios.post('/customer/profile-picture', formData);
  };

  static getProfilePicture = async data => {
    return await Axios.get('/customer/profile-picture');
  };
}

export default User;

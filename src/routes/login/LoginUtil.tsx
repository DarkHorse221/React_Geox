import Axios from 'axios';
import RESTAPIClient from 'RESTAPIClient';

export const loginWithEmailAndPassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  await Axios.post('/login', {
    email,
    password,
  });

  // Get customer details after login
  return await RESTAPIClient.User.getUserDetails();
};

import Axios from 'axios';

export const registerWithData = async data => {
  delete data.verifyEmail;
  delete data.termsAndConditions;
  delete data.confirmPassword;
  data.organization = data.industry;
  await Axios.post('/register', data);
};

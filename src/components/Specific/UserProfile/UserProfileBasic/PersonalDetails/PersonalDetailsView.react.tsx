import { yupResolver } from '@hookform/resolvers';
import GeoXTextField from 'components/Basic/Form/GeoXTextField';
import Select from 'components/Basic/Form/Select';
import SubmitButton from 'components/Basic/Form/SubmitButton';
import Typography, { TypographyType } from 'components/Basic/Typography';
import WhiteCard, { WhiteCardType } from 'components/Basic/WhiteCard';
import csc from 'country-state-city';
import { History } from 'history';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import RESTAPIClient from 'RESTAPIClient';
import { AuthUser } from 'types/Auth';
import Utils from 'Utils';
import { object, string } from 'yup';
import s from './PersonalDetails.module.scss';
import {
  personalDetailsReducer,
  PersonalDetailsStateActionType,
  personalDetailsStateInit,
} from './PersonalDetailsReducer';

interface Props {
  history?: History;
  authUser: AuthUser;
  setAuthUser: (authUser: any) => void;
}

const PersonalDetailsView: React.FC<Props> = (props: Props) => {
  const [personalDetailsState, dispatch] = React.useReducer(
    personalDetailsReducer,
    {},
    personalDetailsStateInit,
  );

  const {
    register,
    handleSubmit,
    errors,
    formState,
    control,
    watch,
    getValues,
    reset,
  } = useForm({
    resolver: yupResolver(
      // Form Validations
      object().shape({
        first_name: string().required('First Name is required'),
        last_name: string().required('Last Name is required'),
        email: string()
          .required('Email is required')
          .email('Email is not valid'),
        company: string().required('Company Name is required'),
        country: string().required('Country Name is required'),
        zip: string().required('Zip Code is required'),
        city: string().required('City is required'),
        state: string().required('State is required'),
        billing_address: string().required('Billing Address is required'),
        address_optional: string(),
        industry: string().required('Industry/Organization is required'),
        work_phone: string(),
      }),
    ),
  });

  // Set countries array
  useEffect(() => {
    const countriesArray = csc.getAllCountries().map(value => {
      return {
        text: value.name,
        value: value.id,
      };
    });
    dispatch({
      type: PersonalDetailsStateActionType.SET_COUNTRIES,
      data: countriesArray,
    });
  }, []);

  // Set state array
  useEffect(() => {
    const selectedCountry = getValues('country');
    const countryStates = csc.getStatesOfCountry(selectedCountry).map(value => {
      return {
        text: value.name,
        value: value.id,
      };
    });
    dispatch({
      type: PersonalDetailsStateActionType.SET_STATES,
      data: countryStates,
    });
  }, [watch('country')]);

  // Set state array
  useEffect(() => {
    const selectedState = getValues('state');
    const cities = csc.getCitiesOfState(selectedState).map(value => {
      return {
        text: value.name,
        value: value.id,
      };
    });
    dispatch({
      type: PersonalDetailsStateActionType.SET_CITIES,
      data: cities,
    });
  }, [watch('state')]);

  // Initialize form
  useEffect(() => {
    reset(props.authUser);
  }, [reset, props.authUser]);

  const onSubmit = async data => {
    try {
      data.city = csc.getCityById(data.city).name;
      data.country = csc.getCountryById(data.country).name;
      data.state = csc.getStateById(data.state).name;

      const authUser = await RESTAPIClient.User.updateUserDetails(data);
      props.setAuthUser(authUser);
      dispatch({
        type: PersonalDetailsStateActionType.SET_ERROR,
        errorMessage: '',
      });
    } catch (error) {
      dispatch({
        type: PersonalDetailsStateActionType.SET_ERROR,
        errorMessage: Utils.Error.getErrorMessageFromApiResponse(error),
      });
    }
  };

  return (
    <WhiteCard
      type={WhiteCardType.Type2}
      header={{ title: 'Personal Details' }}
      className={s.PersonalDetails}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.Row}>
          <GeoXTextField
            name="first_name"
            label="First Name"
            placeholder="Enter first name"
            className={s.FirstField}
            register={register}
            error={errors.first_name}
            helperText={errors.first_name && errors.first_name.message}
          />
          <GeoXTextField
            name="last_name"
            label="Last Name"
            placeholder="Enter last name"
            register={register}
            error={errors.last_name}
            helperText={errors.last_name && errors.last_name.message}
          />
        </div>
        <div className={s.Row}>
          <GeoXTextField
            name="email"
            label="Email"
            placeholder="Enter your Email ID here"
            register={register}
            error={errors.email}
            helperText={errors.email && errors.email.message}
          />
          <GeoXTextField
            name="company"
            label="Company"
            placeholder="Company she/he works for"
            register={register}
            error={errors.company}
            helperText={errors.company && errors.company.message}
          />
        </div>
        <div className={s.Row}>
          <Select
            name="country"
            label="Country"
            className={s.FirstField}
            data={personalDetailsState.countries}
            control={control}
            error={errors.country}
            helperText={errors.country && errors.country.message}
          />
          <GeoXTextField
            name="zip"
            label="Zip"
            type="number"
            register={register}
            error={errors.zip}
            helperText={errors.zip && errors.zip.message}
          />
          <Select
            name="state"
            label="State"
            disabled={personalDetailsState.states.length === 0}
            data={personalDetailsState.states}
            className={s.FirstField}
            control={control}
            error={errors.state}
            helperText={errors.state && errors.state.message}
          />
          <Select
            label="City"
            name="city"
            disabled={personalDetailsState.cities.length === 0}
            data={personalDetailsState.cities}
            control={control}
            error={errors.city}
            helperText={errors.city && errors.city.message}
          />
        </div>
        <div className={s.Row}>
          <GeoXTextField
            name="billing_address"
            label="Billing Address"
            placeholder="Enter Billing Address"
            register={register}
            error={errors.billing_address}
            helperText={
              errors.billing_address && errors.billing_address.message
            }
          />
          <GeoXTextField
            name="address_optional"
            label="Address"
            placeholder="Enter Optional Address"
            register={register}
            error={errors.address_optional}
            helperText={
              errors.address_optional && errors.address_optional.message
            }
          />
        </div>
        <div className={s.Row}>
          <Select
            name="industry"
            label="Industry/Organization"
            data={personalDetailsState.countries}
            control={control}
            error={errors.industry}
            helperText={errors.industry && errors.industry.message}
          />
          <GeoXTextField
            name="work_phone"
            label="Phone Number"
            placeholder="Enter your phone number"
            type="number"
            register={register}
            error={errors.work_phone}
            helperText={errors.work_phone && errors.work_phone.message}
          />
        </div>
        <Typography type={TypographyType.FORM_ERROR}>
          {personalDetailsState.errorMessage &&
            personalDetailsState.errorMessage}
        </Typography>
        <div className="btnFloatRightContainer">
          <SubmitButton
            disabled={formState.isSubmitting}
            loading={formState.isSubmitting}
          >
            Save Changes
          </SubmitButton>
        </div>
      </form>
    </WhiteCard>
  );
};

export default compose<Props, Props>(withRouter)(PersonalDetailsView);

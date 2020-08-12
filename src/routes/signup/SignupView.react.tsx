import { yupResolver } from '@hookform/resolvers';
import { Checkbox } from '@material-ui/core';
import GeoXTextField from 'components/Basic/Form/GeoXTextField';
import Select from 'components/Basic/Form/Select';
import SubmitButton, {
  SubmitButtonType,
} from 'components/Basic/Form/SubmitButton';
import Link, { LinkType } from 'components/Basic/Link';
import Typography, { TypographyType } from 'components/Basic/Typography';
import WhiteCard, { WhiteCardType } from 'components/Basic/WhiteCard';
import csc from 'country-state-city';
import { History, Location } from 'history';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { match, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Routes } from 'routes/constants';
import Utils from 'Utils';
import { boolean, object, string } from 'yup';
import s from './Signup.module.scss';
import {
  signupReducer,
  SignupStateActionTypes,
  signupStateInit,
} from './SignupReducer';
import { registerWithData } from './SignupUtil';

interface Props {
  location?: Location;
  match?: match;
  history?: History;
}

const SignupView: React.FC<Props> = (props: Props) => {
  const [signupState, dispatch] = React.useReducer(
    signupReducer,
    {},
    signupStateInit,
  );

  const {
    register,
    handleSubmit,
    errors,
    formState,
    control,
    watch,
    getValues,
  } = useForm({
    resolver: yupResolver(
      // Form Validations
      object().shape({
        first_name: string().required('First Name is required'),
        last_name: string().required('Last Name is required'),
        email: string()
          .required('Email is required')
          .email('Email is not valid'),
        verifyEmail: string()
          .required('Verify Email is required')
          .test('verifyEmail', 'Verify Email is not same as Email', function (
            value,
          ) {
            return this.parent.email === value ? true : false;
          }),
        password: string().required('Password is required'),
        confirmPassword: string()
          .required('Confirm Password is required')
          .test(
            'confirmPassword',
            'Confirm Password is not same as Password',
            function (value) {
              return this.parent.password === value ? true : false;
            },
          ),
        company: string().required('Company Name is required'),
        country: string().required('Country Name is required'),
        zip: string().required('Zip Code is required'),
        city: string().required('City is required'),
        state: string().required('State is required'),
        billing_address: string().required('Billing Address is required'),
        address_optional: string(),
        industry: string().required('Industry/Organization is required'),
        work_phone: string(),
        termsAndConditions: boolean().test(
          'termsAndConditions',
          'You must Agree on Terms & Conditions to signup.',
          value => value === true,
        ),
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
      type: SignupStateActionTypes.SET_COUNTRIES,
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
      type: SignupStateActionTypes.SET_STATES,
      data: countryStates,
    });
    dispatch({
      type: SignupStateActionTypes.SET_CITIES,
      data: [],
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
      type: SignupStateActionTypes.SET_CITIES,
      data: cities,
    });
  }, [watch('state')]);

  const onSubmit = async data => {
    try {
      data.city = csc.getCityById(data.city).name;
      data.country = csc.getCountryById(data.country).name;
      data.state = csc.getStateById(data.state).name;

      await registerWithData(data);
      props.history.push(Routes.LOGIN);
      dispatch({
        type: SignupStateActionTypes.SET_ERROR,
        errorMessage: '',
      });
    } catch (error) {
      dispatch({
        type: SignupStateActionTypes.SET_ERROR,
        errorMessage: Utils.Error.getErrorMessageFromApiResponse(error),
      });
    }
  };

  return (
    <div className={s.Signup}>
      <WhiteCard
        header={{
          title: 'SIGN UP',
          subTitle: 'Lorem Ipsum is simply dummy text of the printing',
        }}
        type={WhiteCardType.Type1}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.TwoFieldsContainer}>
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
          <GeoXTextField
            name="email"
            label="Email"
            placeholder="Enter your Email ID here"
            register={register}
            error={errors.email}
            helperText={errors.email && errors.email.message}
          />
          <GeoXTextField
            name="verifyEmail"
            label="Verify Email"
            register={register}
            error={errors.verifyEmail}
            helperText={errors.verifyEmail && errors.verifyEmail.message}
          />
          <GeoXTextField
            name="password"
            label="Password"
            type="password"
            placeholder="Enter new password"
            register={register}
            error={errors.password}
            helperText={errors.password && errors.password.message}
          />
          <GeoXTextField
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            placeholder="Re-enter the password"
            register={register}
            error={errors.confirmPassword}
            helperText={
              errors.confirmPassword && errors.confirmPassword.message
            }
          />
          <GeoXTextField
            name="company"
            label="Company"
            placeholder="Company she/he works for"
            register={register}
            error={errors.company}
            helperText={errors.company && errors.company.message}
          />
          <div className={s.TwoFieldsContainer}>
            <Select
              name="country"
              label="Country"
              className={s.FirstField}
              data={signupState.countries}
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
          </div>
          <div className={s.TwoFieldsContainer}>
            <Select
              name="state"
              label="State"
              disabled={signupState.states.length === 0}
              data={signupState.states}
              className={s.FirstField}
              control={control}
              error={errors.state}
              helperText={errors.state && errors.state.message}
            />
            <Select
              label="City"
              name="city"
              disabled={signupState.cities.length === 0}
              data={signupState.cities}
              control={control}
              error={errors.city}
              helperText={errors.city && errors.city.message}
            />
          </div>
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
          <Select
            name="industry"
            label="Industry/Organization"
            data={signupState.countries}
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

          <div className={s.TermsAndConditionsCheckBox}>
            <Checkbox
              color="primary"
              className={s.CheckBox}
              name="termsAndConditions"
              inputRef={register}
            />
            <Typography type={TypographyType.ROBOTO_16_REGULAR}>
              Agree on Terms & Condition Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </Typography>
          </div>
          <Typography
            type={TypographyType.FORM_ERROR}
            className={s.TermsAndConditionError}
          >
            {errors.termsAndConditions && errors.termsAndConditions.message}
            {signupState.errorMessage}
          </Typography>

          {/* Submit */}
          <SubmitButton
            type={SubmitButtonType.FULL_WIDTH}
            disabled={formState.isSubmitting}
            loading={formState.isSubmitting}
          >
            Sign Up
          </SubmitButton>
        </form>
        <div className={s.AlreadyHaveAccountContainer}>
          <Typography type={TypographyType.ROBOTO_16_REGULAR}>
            Already have an account ?
            <Link
              to="login"
              type={LinkType.UNDERLINE_AND_BLUE}
              className={s.LoginLink}
            >
              Login
            </Link>
          </Typography>
        </div>
      </WhiteCard>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(SignupView);

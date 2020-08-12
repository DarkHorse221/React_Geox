import { yupResolver } from '@hookform/resolvers';
import GeoXTextField from 'components/Basic/Form/GeoXTextField';
import SubmitButton from 'components/Basic/Form/SubmitButton';
import Typography, { TypographyType } from 'components/Basic/Typography';
import WhiteCard, { WhiteCardType } from 'components/Basic/WhiteCard';
import { History } from 'history';
import React from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import RESTAPIClient from 'RESTAPIClient';
import Utils from 'Utils';
import { object, string } from 'yup';
import s from './Password.module.scss';
import {
  passwordReducer,
  PasswordStateActionType,
  passwordStateInit,
} from './PasswordReducer';

interface Props {
  history?: History;
}

const PasswordView: React.FC<Props> = (props: Props) => {
  const [passwordState, dispatch] = React.useReducer(
    passwordReducer,
    {},
    passwordStateInit,
  );

  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(
      // Form Validations
      object().shape({
        current_password: string().required('Current Password is required'),
        new_password: string().required('New Password is required'),
        confirmPassword: string()
          .required('Confirm Password is required')
          .test(
            'confirmPassword',
            'Confirm Password is not same as Password',
            function (value) {
              return this.parent.new_password === value ? true : false;
            },
          ),
      }),
    ),
  });

  const onSubmit = async data => {
    try {
      delete data.confirmPassword;
      await RESTAPIClient.User.changePassword(data);
      dispatch({
        type: PasswordStateActionType.SET_ERROR,
        errorMessage: '',
      });
    } catch (error) {
      dispatch({
        type: PasswordStateActionType.SET_ERROR,
        errorMessage: Utils.Error.getErrorMessageFromApiResponse(error),
      });
    }
  };

  return (
    <WhiteCard
      type={WhiteCardType.Type2}
      header={{ title: 'Password' }}
      className={s.Password}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-row">
          <GeoXTextField
            label="Current Password"
            placeholder="Enter Current Password"
            className={s.FirstField}
            name="current_password"
            type="password"
            register={register}
            error={errors.current_password}
            helperText={
              errors.current_password && errors.current_password.message
            }
          />
          <Typography className={s.CurrentPasswordText}>
            * Lorem Ipsum is simply dummy text of the printing
          </Typography>
        </div>
        <div className="input-row">
          <GeoXTextField
            name="new_password"
            label="Password"
            type="password"
            placeholder="Enter new new_password"
            register={register}
            error={errors.new_password}
            helperText={errors.new_password && errors.new_password.message}
            className={s.FirstField}
          />
          <GeoXTextField
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            placeholder="Re-enter the new_password"
            register={register}
            error={errors.confirmPassword}
            helperText={
              errors.confirmPassword && errors.confirmPassword.message
            }
            className={s.FirstField}
          />
        </div>
        <Typography type={TypographyType.FORM_ERROR}>
          {passwordState.errorMessage}
        </Typography>
        <div className="btnFloatRightContainer">
          <SubmitButton
            disabled={formState.isSubmitting}
            loading={formState.isSubmitting}
          >
            Change Password
          </SubmitButton>
        </div>
      </form>
    </WhiteCard>
  );
};

export default compose<Props, Props>(withRouter)(PasswordView);

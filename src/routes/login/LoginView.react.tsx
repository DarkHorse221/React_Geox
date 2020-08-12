import { yupResolver } from '@hookform/resolvers';
import { Button } from '@material-ui/core';
import LoginWith__GoogleIcon from 'assets/icons/LoginWith__GoogleIcon.svg';
import LoginWith__LinkedInIcon from 'assets/icons/LoginWith__LinkedInIcon.svg';
import cx from 'classnames';
import GeoXTextField from 'components/Basic/Form/GeoXTextField';
import SubmitButton, {
  SubmitButtonType,
} from 'components/Basic/Form/SubmitButton';
import Link, { LinkType } from 'components/Basic/Link';
import Typography, {
  TypographyColor,
  TypographyType,
} from 'components/Basic/Typography';
import WhiteCard, { WhiteCardType } from 'components/Basic/WhiteCard';
import { History, Location } from 'history';
import React from 'react';
import { useForm } from 'react-hook-form';
import { match, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { AuthUser } from 'types/Auth';
import Utils from 'Utils';
import { object, string } from 'yup';
import s from './Login.module.scss';
import {
  loginReducer,
  LoginStateActionTypes,
  loginStateInit,
} from './LoginReducer';
import { loginWithEmailAndPassword } from './LoginUtil';

interface Props {
  location?: Location;
  match?: match;
  history?: History;
  setAuthUser: (authUser: AuthUser) => void;
}

const validationSchema = object().shape({
  email: string()
    .required('Email is required')
    .email('Email address is not valid'),
  password: string().required('Password is required'),
});

const LoginView: React.FC<Props> = (props: Props) => {
  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    {},
    loginStateInit,
  );

  const { register, handleSubmit, errors, formState } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async data => {
    try {
      const authUser = await loginWithEmailAndPassword(data);
      props.setAuthUser(authUser);
      dispatch({
        type: LoginStateActionTypes.SET_ERROR,
        errorMessage: '',
      });
    } catch (error) {
      dispatch({
        type: LoginStateActionTypes.SET_ERROR,
        errorMessage: Utils.Error.getErrorMessageFromApiResponse(error),
      });
    }
  };

  return (
    <div className={s.Login}>
      <WhiteCard
        header={{
          title: 'WELCOME',
          subTitle: 'Please enter a valid email address & password',
        }}
        type={WhiteCardType.Type1}
      >
        <form className={s.LoginForm} onSubmit={handleSubmit(onSubmit)}>
          <GeoXTextField
            name="email"
            type="email"
            label="Email"
            placeholder="Enter email address"
            register={register}
            error={errors.email}
            helperText={errors.email && errors.email.message}
          />
          <GeoXTextField
            name="password"
            type="password"
            label="Enter your password"
            register={register}
            error={errors.password}
            helperText={errors.password && errors.password.message}
          />

          {/* Error message */}
          <Typography type={TypographyType.FORM_ERROR}>
            {loginState.errorMessage}
          </Typography>

          <SubmitButton
            disabled={formState.isSubmitting}
            loading={formState.isSubmitting}
            type={SubmitButtonType.FULL_WIDTH}
          >
            Login
          </SubmitButton>

          {/* Forget Password */}
          <Link to="forget-password" className={s.LoginForm__ForgetPassword}>
            Forget Password
          </Link>
        </form>
        <Typography
          type={TypographyType.ROBOTO_16_REGULAR}
          className={s.OrLoginWith}
        >
          - Or login with -
        </Typography>

        <div className={s.LoginWithButtonsContainer}>
          <Button className={cx(s.LoginWithButton, s.LoginWithButtonGoogle)}>
            <img src={LoginWith__GoogleIcon} alt="" />
            <Typography type={TypographyType.ROBOTO_16_REGULAR}>
              Login WITH GOOGLE
            </Typography>
          </Button>
          <Button className={cx(s.LoginWithButton, s.LoginWithButtonLinkedIn)}>
            <img src={LoginWith__LinkedInIcon} alt="" />
            <Typography
              type={TypographyType.ROBOTO_16_REGULAR}
              color={TypographyColor.WHITE}
            >
              LOGIN WITH LINKEDIN
            </Typography>
          </Button>
        </div>

        <div className={s.CreateNewAccountContainer}>
          <Typography type={TypographyType.ROBOTO_16_REGULAR}>
            Don't have an account ?
            <Link
              to="signup"
              type={LinkType.UNDERLINE_AND_BLUE}
              className={s.CreateAccountLink}
            >
              Create Account
            </Link>
          </Typography>
        </div>
      </WhiteCard>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(LoginView);

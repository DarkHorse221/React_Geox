import LoginWith__GoogleIcon from 'assets/icons/LoginWith__GoogleIcon.svg';
import LoginWith__LinkedInIcon from 'assets/icons/LoginWith__LinkedInIcon.svg';
import cx from 'classnames';
import SubmitButton, {
  SubmitButtonType,
} from 'components/Basic/Form/SubmitButton';
import Typography, { TypographyType } from 'components/Basic/Typography';
import WhiteCard, { WhiteCardType } from 'components/Basic/WhiteCard';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './LogInWith.module.scss';
import { logInWithReducer, logInWithStateInit } from './LogInWithReducer';

interface Props {
  history?: History;
}

const LogInWithView: React.FC<Props> = (props: Props) => {
  const [logInWithState, dispatch] = React.useReducer(
    logInWithReducer,
    {},
    logInWithStateInit,
  );

  return (
    <WhiteCard
      type={WhiteCardType.Type2}
      header={{ title: 'Log in with' }}
      className={s.LogInWith}
    >
      <div className={s.LogInWith__Row}>
        <div className={s.LogInWith__Name}>
          <img src={LoginWith__GoogleIcon} alt="" />
          <Typography type={TypographyType.ROBOTO_18_MEDIUM}>
            Login with google
          </Typography>
        </div>
        <SubmitButton
          type={SubmitButtonType.ROUND_CORNER}
          className={cx(s.LogInWith__Button, s.Disconnect)}
        >
          Disconnect
        </SubmitButton>
      </div>
      <div className={s.LogInWith__Row}>
        <div className={s.LogInWith__Name}>
          <img src={LoginWith__LinkedInIcon} alt="" />
          <Typography type={TypographyType.ROBOTO_18_MEDIUM}>
            Login with Linkedin
          </Typography>
        </div>
        <SubmitButton
          type={SubmitButtonType.ROUND_CORNER}
          className={s.LogInWith__Button}
        >
          Connect
        </SubmitButton>
      </div>
    </WhiteCard>
  );
};

export default compose<Props, Props>(withRouter)(LogInWithView);

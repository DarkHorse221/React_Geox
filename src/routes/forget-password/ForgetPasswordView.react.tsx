import GeoXTextField from 'components/Basic/Form/GeoXTextField';
import SubmitButton, {
  SubmitButtonType,
} from 'components/Basic/Form/SubmitButton';
import Link, { LinkType } from 'components/Basic/Link';
import Typography, { TypographyType } from 'components/Basic/Typography';
import WhiteCard, { WhiteCardType } from 'components/Basic/WhiteCard';
import { History, Location } from 'history';
import React from 'react';
import { match, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './ForgetPassword.module.scss';
import {
  forgetPasswordReducer,
  forgetPasswordStateInit,
} from './ForgetPasswordReducer';

interface Props {
  location?: Location;
  match?: match;
  history?: History;
}

const ForgetPasswordView: React.FC<Props> = (props: Props) => {
  const [forgetPasswordState, dispatch] = React.useReducer(
    forgetPasswordReducer,
    {},
    forgetPasswordStateInit,
  );

  return (
    <div className={s.ForgetPassword}>
      <WhiteCard
        header={{
          title: 'FORGOT Password',
          subTitle: 'Lorem Ipsum is simply dummy text of the printing',
        }}
        type={WhiteCardType.Type1}
      >
        <form>
          <GeoXTextField
            name="email"
            label="Email"
            required
            placeholder="Enter email address"
          />

          {/* Submit */}
          <SubmitButton type={SubmitButtonType.FULL_WIDTH}>Submit</SubmitButton>
        </form>
        <div className={s.Footer}>
          <Typography type={TypographyType.ROBOTO_16_REGULAR}>
            Back To
            <Link
              to="login"
              type={LinkType.UNDERLINE_AND_BLUE}
              className={s.FooterLink}
            >
              Login
            </Link>
          </Typography>
        </div>
      </WhiteCard>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(ForgetPasswordView);

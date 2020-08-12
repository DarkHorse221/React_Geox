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
import s from './ResetPassword.module.scss';
import {
  resetPasswordReducer,
  resetPasswordStateInit,
} from './ResetPasswordReducer';

interface Props {
  location?: Location;
  match?: match;
  history?: History;
}

const ResetPasswordView: React.FC<Props> = (props: Props) => {
  const [resetPasswordState, dispatch] = React.useReducer(
    resetPasswordReducer,
    {},
    resetPasswordStateInit,
  );

  return (
    <div className={s.ResetPassword}>
      <WhiteCard
        header={{
          title: 'SET NEW PASSWORD',
          subTitle: 'Lorem Ipsum is simply dummy text of the printing',
        }}
        type={WhiteCardType.Type1}
      >
        <form>
          <GeoXTextField
            name="email"
            label="New Password"
            required
            placeholder="Enter New Password"
          />
          <GeoXTextField
            name="email"
            label="Re-Enter New Password"
            required
            placeholder="Re-Enter New Password"
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

export default compose<Props, Props>(withRouter)(ResetPasswordView);

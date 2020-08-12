import { Button, InputAdornment } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FooterLogo from 'assets/icons/FooterLogo.svg';
import InstagramLogo from 'assets/icons/InstagramLogo.svg';
import LinkedInLogo from 'assets/icons/LinkedInLogo.svg';
import cx from 'classnames';
import Typography, {
  TypographyColor,
  TypographyType,
} from 'components/Basic/Typography';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './Footer.module.scss';
import { footerReducer, footerStateInit } from './FooterReducer';

interface Props {
  history?: History;
}

const FooterView: React.FC<Props> = (props: Props) => {
  const [footerState, dispatch] = React.useReducer(
    footerReducer,
    {},
    footerStateInit,
  );

  return (
    <div className={s.Footer}>
      <div>
        <div className={s.Footer__FirstRow}>
          <div>
            <img src={FooterLogo} alt="" />
          </div>
          <div>
            <div className={s.Footer__BoldText16}>
              <Typography
                type={TypographyType.ROBOTO_16_MEDIUM}
                color={TypographyColor.WHITE}
              >
                NAVIGATIONS
              </Typography>
            </div>
            <div className={s.Footer__LightText}>
              <Typography
                type={TypographyType.ROBOTO_16_MEDIUM}
                color={TypographyColor.LIGHT_GREY__A4A3A6}
              >
                Connect Us
              </Typography>
              <Typography
                type={TypographyType.ROBOTO_16_MEDIUM}
                color={TypographyColor.LIGHT_GREY__A4A3A6}
              >
                About Us
              </Typography>
              <Typography
                type={TypographyType.ROBOTO_16_MEDIUM}
                color={TypographyColor.LIGHT_GREY__A4A3A6}
              >
                Product
              </Typography>
              <Typography
                type={TypographyType.ROBOTO_16_MEDIUM}
                color={TypographyColor.LIGHT_GREY__A4A3A6}
              >
                Login
              </Typography>
            </div>
          </div>
          <div
            className={cx({
              [s.Footer__LightText]: true,
              [s.Footer__Address]: true,
            })}
          >
            <Typography
              type={TypographyType.ROBOTO_16_REGULAR}
              color={TypographyColor.LIGHT_GREY__A4A3A6}
            >
              San Francisco Bay
              <br />
              Headquarters
              <br />
              283 4th Street, Suite 301,
              <br />
              Oakland, CA 94607
            </Typography>
          </div>
          <div>
            <div className={s.Footer__BoldText16}>
              <Typography
                type={TypographyType.ROBOTO_16_MEDIUM}
                color={TypographyColor.WHITE}
                uppercase
              >
                Subscribe for Periodic Updates
              </Typography>
            </div>
            <div className={s.Footer__LightText}>
              <Typography
                type={TypographyType.ROBOTO_16_REGULAR}
                color={TypographyColor.LIGHT_GREY__A4A3A6}
              >
                Receive news, announcements and reports
              </Typography>
            </div>
            <FormControl
              variant="outlined"
              className={s.Footer__SignUpContainer}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="text"
                // onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <Button size="medium">Signup</Button>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
            <div className={s.Footer__FollowUs}>
              <div className={s.Footer__FollowUsText}>
                <Typography
                  type={TypographyType.ROBOTO_18_MEDIUM}
                  color={TypographyColor.WHITE}
                >
                  Follow Us
                </Typography>
              </div>
              <img src={LinkedInLogo} alt="" />
              <img src={InstagramLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(FooterView);

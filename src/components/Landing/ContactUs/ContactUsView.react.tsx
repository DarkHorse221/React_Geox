import GeoXTextArea from 'components/Basic/Form/GeoXTextArea';
import GeoXTextField from 'components/Basic/Form/GeoXTextField';
import SubmitButton, {
  SubmitButtonType,
} from 'components/Basic/Form/SubmitButton';
import Typography, {
  TypographyColor,
  TypographyType,
} from 'components/Basic/Typography';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './ContactUs.module.scss';
import { contactUsReducer, contactUsStateInit } from './ContactUsReducer';

interface Props {
  history?: History;
}

const ContactUsView: React.FC<Props> = (props: Props) => {
  const [contactUsState, dispatch] = React.useReducer(
    contactUsReducer,
    {},
    contactUsStateInit,
  );

  return (
    <div className={s.ContactUs}>
      <div className={s.ContactUs__InfoContainer}>
        <div className={s.ContactUs__Info}>
          <div className="SectionName">
            <Typography
              type={TypographyType.ROBOTO_18_MEDIUM}
              color={TypographyColor.WHITE}
            >
              Section
            </Typography>
          </div>
          <div className={s.ContactUs__Info_Title}>
            <Typography
              type={TypographyType.Titillium_Web_45_700}
              color={TypographyColor.WHITE}
            >
              Company customer types belief, Lorem Ipsum is not simply random
              text.
            </Typography>
          </div>
          <div className={s.ContactUs__Info_Description}>
            <Typography
              type={TypographyType.ROBOTO_16_REGULAR}
              color={TypographyColor.WHITE}
            >
              Ecopia leverages artificial intelligence (“AI”) to mine geospatial
              big data, rapidly generating HD Vector Maps at-scale, all with the
              accuracy of a trained GIS professional. Our HD Vector Maps are
              trusted foundational layers embedded into critical applications
              around the world.
            </Typography>
          </div>
        </div>
      </div>

      <div className={s.ContactUs__FormContainer}>
        <div className={s.ContactUs__Form}>
          <div className="SectionName">
            <Typography type={TypographyType.ROBOTO_18_MEDIUM}>
              TAKE THE NEXT STEP
            </Typography>
          </div>
          <div className={s.ContactUs__FormHeader}>
            <Typography type={TypographyType.Titillium_Web_50_700}>
              Contact Us
            </Typography>
          </div>
          <form>
            <GeoXTextField
              label="First Name"
              name="email"
              className={s.ContactUs__Form_FirstName}
            />
            <GeoXTextField
              label="Last Name"
              name="email"
              className={s.ContactUs__Form_LastName}
            />
            <GeoXTextField name="email" label="Email Address" />
            <GeoXTextField name="email" label="Company Name" />
            <GeoXTextField name="email" label="Phone Number" />
            <GeoXTextArea
              label="Tell us more about your project, needs, and timelines"
              rows={5}
            />
            <SubmitButton type={SubmitButtonType.FULL_WIDTH}>
              SUBMIT
            </SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(ContactUsView);

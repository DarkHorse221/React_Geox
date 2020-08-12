import AboutUs__Feature1 from 'assets/icons/AboutUs__Feature1.svg';
import AboutUs__Feature2 from 'assets/icons/AboutUs__Feature2.svg';
import AboutUs__Feature3 from 'assets/icons/AboutUs__Feature3.svg';
import Typography, {
  TypographyColor,
  TypographyType,
} from 'components/Basic/Typography';
import Feature from 'components/Specific/Feature';
import { History } from 'history';
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './AboutUs.module.scss';
import { aboutUsReducer, aboutUsStateInit } from './AboutUsReducer';
import PropertyProfile from './PropertyProfile';

interface Props {
  history?: History;
}

const AboutUsView: React.FC<Props> = (props: Props) => {
  const [aboutUsState, dispatch] = React.useReducer(
    aboutUsReducer,
    {},
    aboutUsStateInit,
  );

  return (
    <div className={s.AboutUs}>
      {/* AboutUs_FirstSection */}
      <div className={s.AboutUs_FirstSection}>
        <div className={s.sectionName}>
          <Typography
            type={TypographyType.ROBOTO_18_MEDIUM}
            color={TypographyColor.WHITE}
            uppercase
          >
            ABOUT US
          </Typography>
        </div>
        <div className={s.AboutUs__FirstSection_Header}>
          <Typography
            type={TypographyType.Titillium_Web_45_700}
            color={TypographyColor.WHITE}
          >
            Company customer types belief
          </Typography>
        </div>
        <div className={s.AboutUs__FirstSection_Description}>
          <Typography
            type={TypographyType.ROBOTO_16_REGULAR}
            color={TypographyColor.WHITE}
          >
            Valuable property attributes combined with a simple API allow
            investors and insurers to better select properties, evaluate risk,
            and streamline underwriting processes.
          </Typography>
        </div>
        <div className={s.Features}>
          <Feature
            title="Accurate & Reliable"
            description="We have refined iterative AI-based systems which have the ability to extract HD Vector Maps with the accuracy of a trained GIS professional, at-scale"
            icon={AboutUs__Feature1}
            textColor={{
              title: TypographyColor.WHITE,
              description: TypographyColor.LIGHT_GREY__ABAFBA,
            }}
            className={s.Feature}
          />
          <Feature
            title="3D Attributes"
            description="We produce millions of km2 of HD Vector Maps per month, offering unmatched speed and scalability across all terrains, while maintaining best-in-class accuracy"
            icon={AboutUs__Feature2}
            textColor={{
              title: TypographyColor.WHITE,
              description: TypographyColor.LIGHT_GREY__ABAFBA,
            }}
            className={s.Feature}
          />
          <Feature
            title="12+ Billon data point"
            description="We partner to gain access to the most up-to-date geospatial imagery, which is then rapidly mined using our AI-based systems to create and maintain the most up-to-date representations of reality"
            icon={AboutUs__Feature3}
            textColor={{
              title: TypographyColor.WHITE,
              description: TypographyColor.LIGHT_GREY__ABAFBA,
            }}
            className={s.Feature}
          />
        </div>
      </div>

      {/* AboutUs_SecondSection */}
      <div className={s.AboutUs_SecondSection}>
        <div className={s.AboutUs_SecondSection_Header}>
          <Typography type={TypographyType.Titillium_Web_45_700}>
            Assess remotely.
          </Typography>
          <Typography type={TypographyType.Titillium_Web_45_700}>
            Underwrite & price accurately.
          </Typography>
        </div>
        <div className={s.AboutUs_SecondSection_Description}>
          <Typography type={TypographyType.ROBOTO_16_REGULAR}>
            Valuable property attributes combined with a simple API allow
            investors and insurers to better select properties, evaluate risk,
            and streamline underwriting processes.
          </Typography>
        </div>

        <AwesomeSlider>
          <div>
            <PropertyProfile />
          </div>
          <div>
            <PropertyProfile />
          </div>
          <div>
            <PropertyProfile />
          </div>
          <div>
            <PropertyProfile />
          </div>
        </AwesomeSlider>
      </div>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(AboutUsView);

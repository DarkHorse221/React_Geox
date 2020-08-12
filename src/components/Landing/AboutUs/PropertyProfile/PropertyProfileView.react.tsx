import AboutUsImage from 'assets/images/AboutUsImage.png';
import Typography, {
  TypographyColor,
  TypographyType,
} from 'components/Basic/Typography';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './PropertyProfile.module.scss';
import {
  propertyProfileReducer,
  propertyProfileStateInit,
} from './PropertyProfileReducer';

interface Props {
  history?: History;
}

const PropertyProfileView: React.FC<Props> = (props: Props) => {
  const [propertyProfileState, dispatch] = React.useReducer(
    propertyProfileReducer,
    {},
    propertyProfileStateInit,
  );

  return (
    <div className={s.PropertyProfile}>
      <div className={s.PropertyProfile__Image}>
        <img src={AboutUsImage} alt="" />
      </div>
      <div className={s.PropertyProfile__Data}>
        <div className={s.PropertyProfile__Quote}>
          <Typography type={TypographyType.ROBOTO_16_REGULAR}>
            &#8212; Turning imagery into property specific intelligence
          </Typography>
        </div>
        <div className={s.PropertyProfile__Header}>
          <Typography type={TypographyType.Titillium_Web_50_700}>
            Property profile
          </Typography>
        </div>
        <div className={s.PropertyProfile__Address}>123 MAIN STREET, USA</div>
        <div className={s.PropertyProfile__Characteristics}>
          <div className={s.PropertyProfile__Summary}>
            <div>
              <div>
                <Typography
                  type={TypographyType.ROBOTO_16_REGULAR}
                  uppercase
                  color={TypographyColor.WHITE}
                >
                  By peril
                </Typography>
                <Typography
                  type={TypographyType.ROBOTO_16_REGULAR}
                  uppercase
                  color={TypographyColor.WHITE}
                >
                  attributes:
                </Typography>
              </div>
              <div>
                <Typography
                  type={TypographyType.ROBOTO_30_MEDIUM}
                  uppercase
                  color={TypographyColor.WHITE}
                >
                  Hail
                </Typography>
              </div>
            </div>
            <div>
              <Typography
                type={TypographyType.ROBOTO_16_REGULAR}
                uppercase
                color={TypographyColor.WHITE}
              >
                Property
              </Typography>
              <Typography
                type={TypographyType.ROBOTO_16_REGULAR}
                uppercase
                color={TypographyColor.WHITE}
              >
                Characteristics
              </Typography>
            </div>
          </div>
          <div className={s.PropertyProfile__CharacteristicsData}>
            <div>
              <div className={s.PropertyProfile__CharacteristicsDataName}>
                <Typography type={TypographyType.ROBOTO_16_REGULAR}>
                  Roof Condition
                </Typography>
              </div>
              <div className={s.PropertyProfile__CharacteristicsDataValue}>
                <Typography type={TypographyType.ROBOTO_16_REGULAR}>
                  Severe
                </Typography>
              </div>
            </div>
            <div>
              <div className={s.PropertyProfile__CharacteristicsDataName}>
                <Typography type={TypographyType.ROBOTO_16_REGULAR}>
                  Roof Condition
                </Typography>
              </div>
              <div className={s.PropertyProfile__CharacteristicsDataValue}>
                <Typography type={TypographyType.ROBOTO_16_REGULAR}>
                  Severe
                </Typography>
              </div>
            </div>
            <div>
              <div className={s.PropertyProfile__CharacteristicsDataName}>
                <Typography type={TypographyType.ROBOTO_16_REGULAR}>
                  Roof Condition
                </Typography>
              </div>
              <div className={s.PropertyProfile__CharacteristicsDataValue}>
                <Typography type={TypographyType.ROBOTO_16_REGULAR}>
                  Severe
                </Typography>
              </div>
            </div>
            <div>
              <div className={s.PropertyProfile__CharacteristicsDataName}>
                <Typography type={TypographyType.ROBOTO_16_REGULAR}>
                  Roof Condition
                </Typography>
              </div>
              <div className={s.PropertyProfile__CharacteristicsDataValue}>
                <Typography type={TypographyType.ROBOTO_16_REGULAR}>
                  Severe
                </Typography>
              </div>
            </div>
            <div>
              <div className={s.PropertyProfile__CharacteristicsDataName}>
                <Typography type={TypographyType.ROBOTO_16_REGULAR}>
                  Roof Condition
                </Typography>
              </div>
              <div className={s.PropertyProfile__CharacteristicsDataValue}>
                <Typography type={TypographyType.ROBOTO_16_REGULAR}>
                  Severe
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(PropertyProfileView);

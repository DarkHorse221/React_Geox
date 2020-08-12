import { Button } from '@material-ui/core';
import KnowMoreButtonArrow from 'assets/icons/knowMoreButtonArrow.svg';
import OurCustomer__Feature1 from 'assets/icons/OurCustomer__Feature1.svg';
import OurCustomer__Feature2 from 'assets/icons/OurCustomer__Feature2.svg';
import OurCustomer__Feature3 from 'assets/icons/OurCustomer__Feature3.svg';
import OurCustomer__Feature4 from 'assets/icons/OurCustomer__Feature4.svg';
import Typography, {
  TypographyColor,
  TypographyType,
} from 'components/Basic/Typography';
import OurFeature from 'components/Specific/Feature';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './OurCustomer.module.scss';
import { ourCustomerReducer, ourCustomerStateInit } from './OurCustomerReducer';

interface Props {
  history?: History;
}

const OurCustomerView: React.FC<Props> = (props: Props) => {
  const [ourCustomerState, dispatch] = React.useReducer(
    ourCustomerReducer,
    {},
    ourCustomerStateInit,
  );

  return (
    <div className={s.OurCustomer}>
      <div className={s.OurCustomerFeatureInner}>
        <div className={s.sectionName}>
          <Typography
            type={TypographyType.ROBOTO_18_MEDIUM}
            color={TypographyColor.WHITE}
          >
            Our customer
          </Typography>
        </div>
        <Typography
          type={TypographyType.Titillium_Web_50_700}
          color={TypographyColor.WHITE}
        >
          GeoX high quality property data value
        </Typography>
        <div className={s.OurCustomer__Description}>
          <Typography
            type={TypographyType.ROBOTO_24_MEDIUM}
            color={TypographyColor.WHITE}
          >
            High-Quality Property Data is vital to insurance companies and
            agents for better business results.
          </Typography>
        </div>
        <div className={s.Features}>
          <OurFeature
            title="Accurate Underwriting"
            icon={OurCustomer__Feature1}
            textColor={{
              title: TypographyColor.WHITE,
            }}
            className={s.Feature}
          />
          <OurFeature
            title="Streamlines Insurance processes"
            icon={OurCustomer__Feature2}
            textColor={{
              title: TypographyColor.WHITE,
            }}
            className={s.Feature}
          />
          <OurFeature
            title="Reducing claims"
            icon={OurCustomer__Feature3}
            textColor={{
              title: TypographyColor.WHITE,
            }}
            className={s.Feature}
          />
          <OurFeature
            title="Grows revenues"
            icon={OurCustomer__Feature4}
            textColor={{
              title: TypographyColor.WHITE,
            }}
            className={s.Feature}
          />
        </div>
        <div className="KnowMoreButton">
          <Button>
            <Typography
              type={TypographyType.ROBOTO_18_REGULAR}
              color={TypographyColor.WHITE}
            >
              Know more <img src={KnowMoreButtonArrow} alt="" />
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(OurCustomerView);

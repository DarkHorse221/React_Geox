import { Button } from '@material-ui/core';
import KnowMoreButtonArrow from 'assets/icons/knowMoreButtonArrow.svg';
import OurSolution__Icon1 from 'assets/icons/OurSolution__Icon1.svg';
import OurSolution__Icon2 from 'assets/icons/OurSolution__Icon2.svg';
import OurSolution__Icon3 from 'assets/icons/OurSolution__Icon3.svg';
import OurSolution__Icon4 from 'assets/icons/OurSolution__Icon4.svg';
import OurSolution__Icon5 from 'assets/icons/OurSolution__Icon5.svg';
import OurSolution__Image1 from 'assets/images/OurSolution__Image1.png';
import OurSolution__Image2 from 'assets/images/OurSolution__Image2.png';
import cx from 'classnames';
import Typography, {
  TypographyColor,
  TypographyType,
} from 'components/Basic/Typography';
import OurFeatureReact from 'components/Specific/Feature';
import LandingSectionSummary from 'components/Specific/LandingSectionSummary';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './OurSolution.module.scss';
import { ourSolutionReducer, ourSolutionStateInit } from './OurSolutionReducer';

interface Props {
  history?: History;
}

const OurSolutionView: React.FC<Props> = (props: Props) => {
  const [ourSolutionState, dispatch] = React.useReducer(
    ourSolutionReducer,
    {},
    ourSolutionStateInit,
  );

  return (
    <div className={s.OurSolution}>
      <div className={s.OurSolution__HeaderContainer}>
        <LandingSectionSummary
          title="OUR Solution"
          subTitle={
            <>
              Assess remotely.
              <br />
              Underwrite & price accurately.
            </>
          }
          description="Valuable property attributes combined with a simple API allow
      investors and insurers to better select properties, evaluate risk,
      and streamline underwriting processes."
          className={s.OurSolution__LandingSectionSummary}
        />
      </div>

      {/* Images */}
      <div className={s.OurSolution__Images}>
        <img
          src={OurSolution__Image1}
          alt=""
          className={s.OurSolution__Images_1}
        />
        <img
          src={OurSolution__Image2}
          alt=""
          className={s.OurSolution__Images_2}
        />
      </div>

      {/* Features */}
      <div className={s.FeaturesContainer}>
        <div>
          <div className={s.Features}>
            <OurFeatureReact
              title="Up to date"
              icon={OurSolution__Icon1}
              className={s.Feature}
            />
            <OurFeatureReact
              title="USA full coverage"
              icon={OurSolution__Icon2}
              className={s.Feature}
            />
            <OurFeatureReact
              title="Comprehensive Property Data"
              icon={OurSolution__Icon3}
              className={s.Feature}
            />
            <OurFeatureReact
              title="Rich Property Data"
              icon={OurSolution__Icon4}
              className={s.Feature}
            />
            <OurFeatureReact
              title="Affordable"
              icon={OurSolution__Icon5}
              className={s.Feature}
            />
          </div>
          <div
            className={cx('KnowMoreButton', {
              [s.KnowMoreButton]: true,
            })}
          >
            <Typography
              type={TypographyType.ROBOTO_18_REGULAR}
              color={TypographyColor.WHITE}
            >
              <Button>
                Know more <img src={KnowMoreButtonArrow} alt="" />
              </Button>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(OurSolutionView);

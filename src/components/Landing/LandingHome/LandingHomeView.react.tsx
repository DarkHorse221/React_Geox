import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PlayIcon from 'assets/icons/playIcon.svg';
import Typography, {
  TypographyColor,
  TypographyType,
} from 'components/Basic/Typography';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './LandingHome.module.scss';
import { landingHomeReducer, landingHomeStateInit } from './LandingHomeReducer';

interface Props {
  history?: History;
}

const LandingHomeView: React.FC<Props> = (props: Props) => {
  const [landingHomeState, dispatch] = React.useReducer(
    landingHomeReducer,
    {},
    landingHomeStateInit,
  );

  return (
    <div className={s.LandingHome}>
      <div className={s.BlueCircle}>
        <div className={s.BlueCircleContent}>
          <div className={s.Title}>
            <Typography
              type={TypographyType.Titillium_Web_70_700}
              color={TypographyColor.WHITE}
            >
              3D-AI
            </Typography>
            <Typography
              type={TypographyType.Titillium_Web_70_700}
              color={TypographyColor.WHITE}
            >
              Intelligence
            </Typography>
            <Typography
              type={TypographyType.Titillium_Web_70_700}
              color={TypographyColor.WHITE}
            >
              for Property
            </Typography>
            <Typography
              type={TypographyType.Titillium_Web_70_700}
              color={TypographyColor.WHITE}
            >
              data
            </Typography>
          </div>
          <div className={s.Description}>
            <Typography
              type={TypographyType.ROBOTO_18_REGULAR}
              color={TypographyColor.WHITE}
            >
              With unique business ideas and the passionate people behind.
            </Typography>
          </div>
          <div className={s.WatchVideoContainer}>
            <Typography
              type={TypographyType.ROBOTO_18_REGULAR}
              color={TypographyColor.WHITE}
              style={{ display: 'inline-block' }}
            >
              Watch Video
            </Typography>

            <IconButton>
              <img src={PlayIcon} alt="" />
            </IconButton>
          </div>
        </div>
      </div>
      <div className={s.FollowUsContainer}>
        <Typography
          type={TypographyType.ROBOTO_18_REGULAR}
          color={TypographyColor.WHITE}
        >
          Follow Us -<Button>Fb.</Button>/<Button>Tw.</Button>/
          <Button>Inst.</Button>
        </Typography>
      </div>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(LandingHomeView);

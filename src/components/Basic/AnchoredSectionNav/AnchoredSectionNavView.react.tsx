import Typography, {
  TypographyColor,
  TypographyType,
} from 'components/Basic/Typography';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './AnchoredSectionNav.module.scss';
import {
  anchoredSectionNavReducer,
  anchoredSectionNavStateInit,
} from './AnchoredSectionNavReducer';

interface Props {
  history?: History;
}

const AnchoredSectionNavView: React.FC<Props> = (props: Props) => {
  const [anchoredSectionNavState, dispatch] = React.useReducer(
    anchoredSectionNavReducer,
    {},
    anchoredSectionNavStateInit,
  );

  return (
    <div className={s.AnchoredSectionNav}>
      <Typography
        type={TypographyType.Titillium_Web_30_600}
        className={s.AnchoredSectionNav_Title}
        color={TypographyColor.WHITE}
      >
        API access
      </Typography>

      <div className={s.AnchoredSectionNav_Section}>
        <Typography
          type={TypographyType.Titillium_Web_30_600}
          className={s.AnchoredSectionNav_Title}
          color={TypographyColor.WHITE}
        >
          Places
        </Typography>
      </div>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(AnchoredSectionNavView);

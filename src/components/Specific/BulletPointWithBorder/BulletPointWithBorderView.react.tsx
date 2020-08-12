import Typography, {
  TypographyColor,
  TypographyType,
} from 'components/Basic/Typography';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './BulletPointWithBorder.module.scss';
import {
  bulletPointWithBorderReducer,
  bulletPointWithBorderStateInit,
} from './BulletPointWithBorderReducer';

interface Props {
  history?: History;
  number: string;
  title: string;
  description: string;
}

const BulletPointWithBorderView: React.FC<Props> = (props: Props) => {
  const [bulletPointWithBorderState, dispatch] = React.useReducer(
    bulletPointWithBorderReducer,
    {},
    bulletPointWithBorderStateInit,
  );

  return (
    <div className={s.BulletPointWithBorder}>
      <Typography
        type={TypographyType.ROBOTO_18_REGULAR}
        color={TypographyColor.LIGHT_GREY__757982}
      >
        {props.number}
      </Typography>
      <Typography
        type={TypographyType.ROBOTO_22_BOLD}
        className={s.BulletPointWithBorder__Title}
      >
        {props.title}
      </Typography>
      <Typography type={TypographyType.ROBOTO_16_REGULAR}>
        {props.description}
      </Typography>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(BulletPointWithBorderView);

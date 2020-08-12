import cx from 'classnames';
import Typography, { TypographyType } from 'components/Basic/Typography';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './LandingSectionSummary.module.scss';
import {
  landingSectionSummaryReducer,
  landingSectionSummaryStateInit,
} from './LandingSectionSummaryReducer';

interface Props {
  history?: History;
  title: string;
  subTitle: React.ReactNode;
  description: React.ReactNode;
  className?: string;
}

const LandingSectionSummaryView: React.FC<Props> = (props: Props) => {
  const [landingSectionSummaryState, dispatch] = React.useReducer(
    landingSectionSummaryReducer,
    {},
    landingSectionSummaryStateInit,
  );

  return (
    <div
      className={cx(s.LandingSectionSummary, {
        [props.className]: props.className,
      })}
    >
      <div className={s.sectionName}>
        <Typography type={TypographyType.ROBOTO_18_MEDIUM}>
          {props.title}
        </Typography>
      </div>
      <div className={s.Header}>
        <Typography type={TypographyType.Titillium_Web_45_700}>
          {props.subTitle}
        </Typography>
      </div>
      <div className={s.Description}>
        <Typography type={TypographyType.ROBOTO_16_REGULAR}>
          {props.description}
        </Typography>
      </div>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(LandingSectionSummaryView);

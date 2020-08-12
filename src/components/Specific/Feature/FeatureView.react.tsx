import cx from 'classnames';
import Typography, {
  TypographyColor,
  TypographyType,
} from 'components/Basic/Typography';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './Feature.module.scss';
import { FeatureReducer, FeatureStateInit } from './FeatureReducer';

interface Props {
  history?: History;
  icon: string;
  title: string;
  textColor?: {
    title?: TypographyColor;
    description?: TypographyColor;
  };
  className?: string;
  description?: string;
}

const FeatureView: React.FC<Props> = (props: Props) => {
  const [FeatureState, dispatch] = React.useReducer(
    FeatureReducer,
    {},
    FeatureStateInit,
  );

  return (
    <div
      className={cx(s.Feature, {
        [props.className]: props.className,
      })}
    >
      <div>
        <img src={props.icon} alt="" />
      </div>
      <Typography
        type={TypographyType.ROBOTO_18_REGULAR}
        color={
          props.textColor && props.textColor.title
            ? props.textColor.title
            : TypographyColor.BLACK
        }
        className={s.FeatureTitle}
      >
        {props.title}
      </Typography>
      {props.description && (
        <Typography
          type={TypographyType.ROBOTO_18_REGULAR}
          color={
            props.textColor && props.textColor.description
              ? props.textColor.description
              : TypographyColor.BLACK
          }
          className={s.FeatureDescription}
        >
          {props.description}
        </Typography>
      )}
    </div>
  );
};

export default compose<Props, Props>(withRouter)(FeatureView);

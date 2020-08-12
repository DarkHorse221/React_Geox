import cx from 'classnames';
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
import s from './PackageCard.module.scss';
import { packageCardReducer, packageCardStateInit } from './PackageCardReducer';

interface Props {
  history?: History;
  header: {
    title: string;
    subTitle: string;
  };
  price: number;
  billingType: 'month' | 'year';
  activePlan?: boolean;
}

const PackageCardView: React.FC<Props> = (props: Props) => {
  const [packageCardState, dispatch] = React.useReducer(
    packageCardReducer,
    {},
    packageCardStateInit,
  );

  return (
    <div
      className={cx(s.PackageCard, {
        [s.ActivePlan]: props.activePlan,
      })}
    >
      <div className={s.PackageCard__Header}>
        <Typography
          type={TypographyType.Titillium_Web_30_600}
          color={TypographyColor.WHITE}
          className={s.PackageCard__Header_Title}
        >
          {props.header.title}
        </Typography>
        <Typography
          type={TypographyType.ROBOTO_18_REGULAR}
          color={TypographyColor.WHITE}
        >
          {props.header.subTitle}
        </Typography>
      </div>
      <div className={s.PackageCard__Body}>
        <div className={s.PackageCardPrice}>
          <Typography
            type={TypographyType.Titillium_Web_40_600}
            color={props.activePlan && TypographyColor.WHITE}
          >
            ${props.price}
          </Typography>
          <div className={s.VerticalLine} />
          <Typography
            type={TypographyType.ROBOTO_16_REGULAR}
            color={
              props.activePlan
                ? TypographyColor.WHITE
                : TypographyColor.LIGHT_GREY__858da1
            }
          >
            Per <br /> {props.billingType}
          </Typography>
        </div>
        <Typography
          type={TypographyType.ROBOTO_16_REGULAR}
          color={
            props.activePlan
              ? TypographyColor.WHITE
              : TypographyColor.LIGHT_GREY__858da1
          }
        >
          20 credits/mo <br /> Accesses to our professional web
        </Typography>
        <SubmitButton
          type={SubmitButtonType.FULL_WIDTH}
          className={cx({
            [s.ActivePlanButton]: props.activePlan,
          })}
        >
          {props.activePlan ? 'Selected Plan' : 'Change Plan'}
        </SubmitButton>
      </div>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(PackageCardView);

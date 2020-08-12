import Typography, {
  TypographyColor,
  TypographyType,
} from 'components/Basic/Typography';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './CopyRight.module.scss';
import { copyRightReducer, copyRightStateInit } from './CopyRightReducer';

interface Props {
  history?: History;
}

const CopyRightView: React.FC<Props> = (props: Props) => {
  const [copyRightState, dispatch] = React.useReducer(
    copyRightReducer,
    {},
    copyRightStateInit,
  );

  return (
    <div className={s.CopyRight}>
      <div className={s.CopyRight__Text}>
        <Typography
          type={TypographyType.ROBOTO_16_REGULAR}
          color={TypographyColor.LIGHT_GREY__A4A3A6}
        >
          © 2020, Gopriv. Privacy Policy Terms & Conditions
        </Typography>
      </div>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(CopyRightView);

import cx from 'classnames';
import Typography, { TypographyType } from 'components/Basic/Typography';
import { History } from 'history';
import React, { useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { WhiteCardType } from '.';
import s from './WhiteCard.module.scss';
import { whiteCardReducer, whiteCardStateInit } from './WhiteCardReducer';

interface Props {
  history?: History;
  className?: string;
  children: React.ReactNode;
  header?: {
    title?: string;
    subTitle?: string;
  };
  type: WhiteCardType;
}

const WhiteCardView: React.FC<Props> = (props: Props) => {
  const [whiteCardState, dispatch] = React.useReducer(
    whiteCardReducer,
    {},
    whiteCardStateInit,
  );

  const WhiteCardHeader = useMemo(() => {
    switch (props.type) {
      case WhiteCardType.Type1:
        return (
          <div className={s.WhiteCardHeaderType1}>
            <Typography type={TypographyType.Titillium_Web_40_400}>
              {props.header.title}
            </Typography>
            <Typography type={TypographyType.ROBOTO_16_REGULAR}>
              {props.header.subTitle}
            </Typography>
          </div>
        );
      case WhiteCardType.Type2:
        return (
          <div className={s.WhiteCardHeaderType2}>
            <Typography type={TypographyType.ROBOTO_20_MEDIUM}>
              {props.header.title}
            </Typography>
          </div>
        );
    }
  }, [props.header.title, props.header.subTitle, props.type]);

  return (
    <div
      className={cx(s.WhiteCard, {
        [props.className]: props.className,
        [s[props.type]]: props.type,
      })}
    >
      {WhiteCardHeader}
      {props.children}
    </div>
  );
};

export default compose<Props, Props>(withRouter)(WhiteCardView);

import cx from 'classnames';
import { History } from 'history';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { LinkType } from '.';
import s from './Link.module.scss';
import { linkReducer, linkStateInit } from './LinkReducer';

interface Props {
  history?: History;
  to: string;
  children: React.ReactNode;
  className?: string;
  type?: LinkType;
}

const LinkView: React.FC<Props> = (props: Props) => {
  const [linkState, dispatch] = React.useReducer(
    linkReducer,
    {},
    linkStateInit,
  );

  return (
    <Link
      className={cx(s.Link, props.className, {
        [s[props.type]]: props.type,
      })}
      to={props.to}
    >
      {props.children}
    </Link>
  );
};

export default compose<Props, Props>(withRouter)(LinkView);

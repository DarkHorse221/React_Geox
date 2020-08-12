import { TextField } from '@material-ui/core';
import cx from 'classnames';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './GeoXTextArea.module.scss';
import {
  geoXTextAreaReducer,
  geoXTextAreaStateInit,
} from './GeoXTextAreaReducer';

interface Props {
  history?: History;
  label: string;
  className?: string;
  rows?: number;
}

const GeoXTextAreaView: React.FC<Props> = (props: Props) => {
  const [geoXTextAreaState, dispatch] = React.useReducer(
    geoXTextAreaReducer,
    {},
    geoXTextAreaStateInit,
  );

  return (
    <TextField
      multiline
      variant="outlined"
      label={props.label}
      className={cx({
        [s.GeoXTextArea]: true,
        [props.className]: props.className,
      })}
      rows={props.rows}
    />
  );
};

export default compose<Props, Props>(withRouter)(GeoXTextAreaView);

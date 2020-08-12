import TextField from '@material-ui/core/TextField';
import cx from 'classnames';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './GeoXTextField.module.scss';
import {
  geoXTextFieldReducer,
  geoXTextFieldStateInit,
} from './GeoXTextFieldReducer';

interface Props {
  history?: History;
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  error?: boolean;
  type?: string;
  register?: object;
  helperText?: React.ReactNode;
}

const GeoXTextFieldView: React.FC<Props> = (props: Props, ...rest) => {
  const [geoXTextFieldState, dispatch] = React.useReducer(
    geoXTextFieldReducer,
    {},
    geoXTextFieldStateInit,
  );

  return (
    <TextField
      label={props.label}
      variant="outlined"
      className={cx({
        [s.GeoXTextFieldView]: true,
        [props.className]: props.className,
      })}
      required={props.required}
      placeholder={props.placeholder || props.label}
      type={props.type}
      name={props.name}
      inputRef={props.register as React.Ref<any>}
      error={props.error}
      helperText={props.helperText}
    />
  );
};

export default compose<Props, Props>(withRouter)(GeoXTextFieldView);

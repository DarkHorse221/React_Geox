import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import GeoXTextFieldView from './GeoXTextFieldView.react';

interface Props {
  history?: History;
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  type?: string;
  register?: object;
  error?: boolean;
  helperText?: React.ReactNode;
}

const GeoXTextField: React.FC<Props> = (props: Props, ...rest) => {
  return <GeoXTextFieldView {...props} />;
};

GeoXTextField.defaultProps = {
  error: false,
};

export default compose<Props, Props>(withRouter)(GeoXTextField);

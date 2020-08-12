import React from 'react';
import PasswordView from './PasswordView.react'
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { History } from 'history';


interface Props {
  history?: History;
}

const Password: React.FC<Props> = (props: Props) => {
  return (
    <PasswordView {...props} />
  );
};

Password.defaultProps = {
}

export default compose<Props, Props>(withRouter)(Password);
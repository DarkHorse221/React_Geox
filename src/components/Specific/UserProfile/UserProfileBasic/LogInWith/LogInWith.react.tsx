import React from 'react';
import LogInWithView from './LogInWithView.react'
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { History } from 'history';


interface Props {
  history?: History;
}

const LogInWith: React.FC<Props> = (props: Props) => {
  return (
    <LogInWithView {...props} />
  );
};

LogInWith.defaultProps = {
}

export default compose<Props, Props>(withRouter)(LogInWith);
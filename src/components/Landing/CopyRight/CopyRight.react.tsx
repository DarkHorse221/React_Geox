import React from 'react';
import CopyRightView from './CopyRightView.react'
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { History } from 'history';


interface Props {
  history?: History;
}

const CopyRight: React.FC<Props> = (props: Props) => {
  return (
    <CopyRightView {...props} />
  );
};

CopyRight.defaultProps = {
}

export default compose<Props, Props>(withRouter)(CopyRight);
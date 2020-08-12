import React from 'react';
import MyPlanView from './MyPlanView.react'
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { History } from 'history';


interface Props {
  history?: History;
}

const MyPlan: React.FC<Props> = (props: Props) => {
  return (
    <MyPlanView {...props} />
  );
};

MyPlan.defaultProps = {
}

export default compose<Props, Props>(withRouter)(MyPlan);
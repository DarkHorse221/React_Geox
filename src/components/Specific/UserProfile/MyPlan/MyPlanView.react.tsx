import PackageTabs from 'components/Specific/PackageTabs';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './MyPlan.module.scss';
import { myPlanReducer, myPlanStateInit } from './MyPlanReducer';

interface Props {
  history?: History;
}

const MyPlanView: React.FC<Props> = (props: Props) => {
  const [myPlanState, dispatch] = React.useReducer(
    myPlanReducer,
    {},
    myPlanStateInit,
  );

  return (
    <div className={s.MyPlan}>
      <PackageTabs className={s.PackageTabs} />
    </div>
  );
};

export default compose<Props, Props>(withRouter)(MyPlanView);

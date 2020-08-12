import AnchoredSectionNav from 'components/Basic/AnchoredSectionNav';
import ApiSection from 'components/Specific/ApiSection';
import { History, Location } from 'history';
import React from 'react';
import { match, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './ApiConnect.module.scss';
import { apiConnectReducer, apiConnectStateInit } from './ApiConnectReducer';

interface Props {
  location?: Location;
  match?: match;
  history?: History;
}

const ApiConnectView: React.FC<Props> = (props: Props) => {
  const [apiConnectState, dispatch] = React.useReducer(
    apiConnectReducer,
    {},
    apiConnectStateInit,
  );

  return (
    <div className={s.ApiConnect}>
      <AnchoredSectionNav />
      <div>
        <ApiSection />
        <ApiSection />
        <ApiSection />
        <ApiSection />
        <ApiSection />
        <ApiSection />
        <ApiSection />
      </div>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(ApiConnectView);

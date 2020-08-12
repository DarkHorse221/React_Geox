import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import LandingHomeView from './LandingHomeView.react';

interface Props {
  history?: History;
}

const LandingHome: React.FC<Props> = (props: Props) => {
  return <LandingHomeView {...props} />;
};

LandingHome.defaultProps = {};

export default compose<Props, Props>(withRouter)(LandingHome);

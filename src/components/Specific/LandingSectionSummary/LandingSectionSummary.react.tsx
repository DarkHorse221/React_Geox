import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import LandingSectionSummaryView from './LandingSectionSummaryView.react';

interface Props {
  history?: History;
  title: string;
  subTitle: React.ReactNode;
  description: React.ReactNode;
  className?: string;
}

const LandingSectionSummary: React.FC<Props> = (props: Props) => {
  return <LandingSectionSummaryView {...props} />;
};

LandingSectionSummary.defaultProps = {};

export default compose<Props, Props>(withRouter)(LandingSectionSummary);

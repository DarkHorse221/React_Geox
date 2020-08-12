import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import PackageCardView from './PackageCardView.react';

interface Props {
  history?: History;
  header: {
    title: string;
    subTitle: string;
  };
  price: number;
  billingType: 'month' | 'year';
  activePlan?: boolean;
}

const PackageCard: React.FC<Props> = (props: Props) => {
  return <PackageCardView {...props} />;
};

PackageCard.defaultProps = {};

export default compose<Props, Props>(withRouter)(PackageCard);

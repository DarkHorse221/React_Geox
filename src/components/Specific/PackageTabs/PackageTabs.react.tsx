import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import PackageTabsView from './PackageTabsView.react';

interface Props {
  history?: History;
  className?: string;
}

const PackageTabs: React.FC<Props> = (props: Props) => {
  return <PackageTabsView {...props} />;
};

PackageTabs.defaultProps = {};

export default compose<Props, Props>(withRouter)(PackageTabs);

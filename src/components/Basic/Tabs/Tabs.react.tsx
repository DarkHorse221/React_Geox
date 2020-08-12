import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import TabsView from './TabsView.react';

interface Props {
  history?: History;
  data: {
    label: string;
    body: React.ReactNode;
  }[];
  centered?: boolean;
  initialTabIndex?: number;
}

const Tabs: React.FC<Props> = (props: Props) => {
  return <TabsView {...props} />;
};

Tabs.defaultProps = {};

export default compose<Props, Props>(withRouter)(Tabs);

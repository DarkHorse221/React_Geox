import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import BulletPointWithBorderView from './BulletPointWithBorderView.react';

interface Props {
  history?: History;
  number: string;
  title: string;
  description: string;
}

const BulletPointWithBorder: React.FC<Props> = (props: Props) => {
  return <BulletPointWithBorderView {...props} />;
};

BulletPointWithBorder.defaultProps = {};

export default compose<Props, Props>(withRouter)(BulletPointWithBorder);

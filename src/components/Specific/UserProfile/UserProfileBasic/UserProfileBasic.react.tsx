import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import UserProfileBasicView from './UserProfileBasicView.react';

interface Props {
  history?: History;
}

const UserProfileBasic: React.FC<Props> = (props: Props) => {
  return <UserProfileBasicView {...props} />;
};

UserProfileBasic.defaultProps = {};

export default compose<Props, Props>(withRouter)(UserProfileBasic);

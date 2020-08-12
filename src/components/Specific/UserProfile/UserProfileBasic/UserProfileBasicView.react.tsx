import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import LogInWith from './LogInWith';
import Password from './Password';
import PersonalDetails from './PersonalDetails';
import ProfilePicture from './ProfilePicture';
import {
  userProfileBasicReducer,
  userProfileBasicStateInit,
} from './UserProfileBasicReducer';

interface Props {
  history?: History;
}

const UserProfileBasicView: React.FC<Props> = (props: Props) => {
  const [userProfileBasicState, dispatch] = React.useReducer(
    userProfileBasicReducer,
    {},
    userProfileBasicStateInit,
  );

  return (
    <>
      <PersonalDetails />
      <ProfilePicture />
      <Password />
      <LogInWith />
    </>
  );
};

export default compose<Props, Props>(withRouter)(UserProfileBasicView);

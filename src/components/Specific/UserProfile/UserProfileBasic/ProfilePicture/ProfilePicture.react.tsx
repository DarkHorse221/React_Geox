import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import ProfilePictureView from './ProfilePictureView.react';

interface Props {
  history?: History;
}

const ProfilePicture: React.FC<Props> = (props: Props) => {
  return <ProfilePictureView {...props} />;
};

ProfilePicture.defaultProps = {};

export default compose<Props, Props>(withRouter)(ProfilePicture);

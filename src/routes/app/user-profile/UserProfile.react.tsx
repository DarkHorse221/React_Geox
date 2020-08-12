import { AppContext } from 'app';
import LoadingView from 'components/Basic/LoadingView';
import { History, Location } from 'history';
import React from 'react';
import { match, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { useFetchUserProfileData } from './UserProfileUtil';
import UserProfileView from './UserProfileView.react';

/** Make sure to add your default props to the defaultProps object at the bottom */
interface Props {
  location?: Location;
  match?: match;
  history?: History;
}

const UserProfile: React.FC<Props> = (props: Props) => {
  const [appState] = React.useContext(AppContext);
  const userProfileData = useFetchUserProfileData(
    props.location.pathname,
    props.match.params,
  );

  if (appState.isLoading) {
    return <LoadingView />;
  }

  return <UserProfileView />;
};

UserProfile.defaultProps = {};

export default compose<Props, Props>(withRouter)(UserProfile);

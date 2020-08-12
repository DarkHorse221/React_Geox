import { AppContext } from 'app';
import LoadingView from 'components/Basic/LoadingView';
import { History, Location } from 'history';
import React from 'react';
import { match, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import SignupView from './SignupView.react';

/** Make sure to add your default props to the defaultProps object at the bottom */
interface Props {
  location?: Location;
  match?: match;
  history?: History;
}

const Signup: React.FC<Props> = (props: Props) => {
  const [appState] = React.useContext(AppContext);

  if (appState.isLoading) {
    return <LoadingView />;
  }

  return <SignupView />;
};

Signup.defaultProps = {};

export default compose<Props, Props>(withRouter)(Signup);

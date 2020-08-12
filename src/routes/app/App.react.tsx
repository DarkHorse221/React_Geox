import { AppContext } from 'app';
import { History, Location } from 'history';
import React from 'react';
import { match, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import LoadingView from 'components/Basic/LoadingView';
import { useFetchAppData } from './AppUtil';
import AppView from './AppView.react';

/** Make sure to add your default props to the defaultProps object at the bottom */
interface Props {
  location?: Location;
  match?: match;
  history?: History;
}

const App: React.FC<Props> = (props: Props) => {
  const [appState] = React.useContext(AppContext);
  const appData = useFetchAppData(
    props.location.pathname,
    props.match.params,
  );

  if (appState.isLoading) {
    return <LoadingView />;
  }

  return <AppView />;
};

App.defaultProps = {};

export default compose<Props, Props>(withRouter)(App);

import { AppContext } from 'app';
import { History, Location } from 'history';
import React from 'react';
import { match, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import LoadingView from 'components/Basic/LoadingView';
import { useFetchProjectsData } from './ProjectsUtil';
import ProjectsView from './ProjectsView.react';

/** Make sure to add your default props to the defaultProps object at the bottom */
interface Props {
  location?: Location;
  match?: match;
  history?: History;
}

const Projects: React.FC<Props> = (props: Props) => {
  const [appState] = React.useContext(AppContext);
  const projectsData = useFetchProjectsData(
    props.location.pathname,
    props.match.params,
  );

  if (appState.isLoading) {
    return <LoadingView />;
  }

  return <ProjectsView />;
};

Projects.defaultProps = {};

export default compose<Props, Props>(withRouter)(Projects);

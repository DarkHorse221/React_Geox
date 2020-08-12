import React from 'react';
import { Location, History } from 'history';
import { match, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import {
projectsReducer,
projectsStateInit,
ProjectsStateActionTypes,
} from './ProjectsReducer';
import s from './Projects.module.scss';

interface Props {
  location?: Location;
  match?: match;
  history?: History;
}

const ProjectsView: React.FC<Props> = (props: Props) => {
  const [projectsState, dispatch] = React.useReducer(
    projectsReducer,
    {},
    projectsStateInit,
  );

  return (
    <div className={s.Projects } >
      Projects...
    </div>
  );
};

export default compose<Props, Props>(withRouter)(ProjectsView);
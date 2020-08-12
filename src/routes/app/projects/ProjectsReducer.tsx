interface ProjectsState { }

enum ProjectsStateActionTypes { }

interface ProjectsStateAction {
  type: ProjectsStateActionTypes;
}

const projectsStateInit = (
  initialState: ProjectsState,
): ProjectsState => {
  return {
    ...initialState
  };
};

const projectsReducer = (
  state: ProjectsState,
  action: ProjectsStateAction,
): ProjectsState => {
  switch (action.type) {
    default:
      return state;
  }
};

export {
  ProjectsStateActionTypes,
  projectsStateInit,
  projectsReducer,
};
import React from 'react';
import { Location, History } from 'history';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import {
apiSectionReducer,
apiSectionStateInit,
ApiSectionStateActionType,
} from './ApiSectionReducer';
import s from './ApiSection.module.scss';

interface Props {
  history?: History;
}

const ApiSectionView: React.FC<Props> = (props: Props) => {
  const [apiSectionState, dispatch] = React.useReducer(
    apiSectionReducer,
    {},
    apiSectionStateInit,
  );

  return (
    <div className={s.ApiSection } >
      ApiSection...
    </div>
  );
};

export default compose<Props, Props>(withRouter)(ApiSectionView);
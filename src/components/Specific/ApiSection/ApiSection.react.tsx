import React from 'react';
import ApiSectionView from './ApiSectionView.react'
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { History } from 'history';


interface Props {
  history?: History;
}

const ApiSection: React.FC<Props> = (props: Props) => {
  return (
    <ApiSectionView {...props} />
  );
};

ApiSection.defaultProps = {
}

export default compose<Props, Props>(withRouter)(ApiSection);
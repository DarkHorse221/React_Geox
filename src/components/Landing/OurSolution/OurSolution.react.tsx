import React from 'react';
import OurSolutionView from './OurSolutionView.react'
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { History } from 'history';


interface Props {
  history?: History;
}

const OurSolution: React.FC<Props> = (props: Props) => {
  return (
    <OurSolutionView {...props} />
  );
};

OurSolution.defaultProps = {
}

export default compose<Props, Props>(withRouter)(OurSolution);
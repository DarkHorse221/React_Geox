import React from 'react';
import AnchoredSectionNavView from './AnchoredSectionNavView.react'
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { History } from 'history';


interface Props {
  history?: History;
}

const AnchoredSectionNav: React.FC<Props> = (props: Props) => {
  return (
    <AnchoredSectionNavView {...props} />
  );
};

AnchoredSectionNav.defaultProps = {
}

export default compose<Props, Props>(withRouter)(AnchoredSectionNav);
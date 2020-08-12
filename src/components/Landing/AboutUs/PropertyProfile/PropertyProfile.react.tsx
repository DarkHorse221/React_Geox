import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import PropertyProfileView from './PropertyProfileView.react';

interface Props {
  history?: History;
}

const PropertyProfile: React.FC<Props> = (props: Props) => {
  return <PropertyProfileView {...props} />;
};

PropertyProfile.defaultProps = {};

export default compose<Props, Props>(withRouter)(PropertyProfile);

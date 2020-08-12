import React from 'react';
import AboutUsView from './AboutUsView.react'
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { History } from 'history';


interface Props {
  history?: History;
}

const AboutUs: React.FC<Props> = (props: Props) => {
  return (
    <AboutUsView {...props} />
  );
};

AboutUs.defaultProps = {
}

export default compose<Props, Props>(withRouter)(AboutUs);
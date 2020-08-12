import React from 'react';
import FooterView from './FooterView.react'
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { History } from 'history';


interface Props {
  history?: History;
}

const Footer: React.FC<Props> = (props: Props) => {
  return (
    <FooterView {...props} />
  );
};

Footer.defaultProps = {
}

export default compose<Props, Props>(withRouter)(Footer);
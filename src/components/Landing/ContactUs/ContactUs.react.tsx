import React from 'react';
import ContactUsView from './ContactUsView.react'
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { History } from 'history';


interface Props {
  history?: History;
}

const ContactUs: React.FC<Props> = (props: Props) => {
  return (
    <ContactUsView {...props} />
  );
};

ContactUs.defaultProps = {
}

export default compose<Props, Props>(withRouter)(ContactUs);
import React from 'react';
import OurCustomerView from './OurCustomerView.react'
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { History } from 'history';


interface Props {
  history?: History;
}

const OurCustomer: React.FC<Props> = (props: Props) => {
  return (
    <OurCustomerView {...props} />
  );
};

OurCustomer.defaultProps = {
}

export default compose<Props, Props>(withRouter)(OurCustomer);
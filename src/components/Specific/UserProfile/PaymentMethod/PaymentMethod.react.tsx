import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import PaymentMethodView from './PaymentMethodView.react';

interface Props {
  history?: History;
}

const PaymentMethod: React.FC<Props> = (props: Props) => {
  return <PaymentMethodView {...props} />;
};

PaymentMethod.defaultProps = {};

export default compose<Props, Props>(withRouter)(PaymentMethod);

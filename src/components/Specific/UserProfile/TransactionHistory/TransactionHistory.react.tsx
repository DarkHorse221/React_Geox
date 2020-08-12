import React from 'react';
import TransactionHistoryView from './TransactionHistoryView.react'
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { History } from 'history';


interface Props {
  history?: History;
}

const TransactionHistory: React.FC<Props> = (props: Props) => {
  return (
    <TransactionHistoryView {...props} />
  );
};

TransactionHistory.defaultProps = {
}

export default compose<Props, Props>(withRouter)(TransactionHistory);
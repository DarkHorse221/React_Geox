import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { TableColumn } from '.';
import TableView from './TableView.react';

interface Props {
  history?: History;
  columns: TableColumn[];
  rows: {}[];
  className?: string;
}

const Table: React.FC<Props> = (props: Props) => {
  return <TableView {...props} />;
};

Table.defaultProps = {};

export default compose<Props, Props>(withRouter)(Table);

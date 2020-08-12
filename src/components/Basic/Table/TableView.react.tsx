import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import cx from 'classnames';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { TableColumn } from '.';
import s from './Table.module.scss';
import { tableReducer, tableStateInit } from './TableReducer';

interface Props {
  history?: History;
  columns: TableColumn[];
  rows: {}[];
  className?: string;
}

const TableView: React.FC<Props> = (props: Props) => {
  const [tableState, dispatch] = React.useReducer(
    tableReducer,
    {},
    tableStateInit,
  );

  return (
    <TableContainer
      className={cx(s.Table, {
        [props.className]: props.className,
      })}
    >
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {props.columns.map(column => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map(row => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1}>
                {props.columns.map(column => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.format ? column.format(value) : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default compose<Props, Props>(withRouter)(TableView);

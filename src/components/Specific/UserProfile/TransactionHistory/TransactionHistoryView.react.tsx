import Link, { LinkType } from 'components/Basic/Link';
import Table, { TableColumn } from 'components/Basic/Table';
import Typography, {
  TypographyColor,
  TypographyType,
} from 'components/Basic/Typography';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './TransactionHistory.module.scss';
import {
  transactionHistoryReducer,
  transactionHistoryStateInit,
} from './TransactionHistoryReducer';

interface Props {
  history?: History;
}

const TransactionHistoryView: React.FC<Props> = (props: Props) => {
  const [transactionHistoryState, dispatch] = React.useReducer(
    transactionHistoryReducer,
    {},
    transactionHistoryStateInit,
  );

  const columns: TableColumn[] = [
    { id: 'DATE', label: 'DATE', align: 'center' },
    {
      id: 'TRANSACTIONS',
      label: 'TRANSACTIONS',
      format: value => (
        <div className={s.TRANSACTION_Container}>
          <div className={s.dummy}></div>
          <div className={s.TRANSACTION__Body}>
            <Typography type={TypographyType.ROBOTO_16_MEDIUM}>
              Paid for order at Dummy name
            </Typography>
            <Typography
              type={TypographyType.ROBOTO_14_REGULAR}
              className={s.Table_TransactionTime}
              color={TypographyColor.LIGHT_GREY__6A6A6A}
            >
              21 MAR, 1:54 PM
            </Typography>
            <Typography
              type={TypographyType.ROBOTO_14_REGULAR}
              color={TypographyColor.LIGHT_GREY__6A6A6A}
            >
              Order ID : 202003211354091117
              <br />
              Transaction ID 29417668202
            </Typography>
          </div>
        </div>
      ),
    },
    { id: 'AMOUNT', label: 'AMOUNT', format: (value: number) => `£${value}` },
    {
      id: 'FEE',
      label: 'FEE',
      format: (value: number) => `£${value}`,
    },
    { id: 'NET', label: 'NET', format: (value: number) => `£${value}` },
    { id: 'STATUS', label: 'STATUS' },
  ];

  const createData = (
    DATE: string,
    TRANSACTION: {
      title: string;
      time: string;
      orderID: string;
      transactionID: string;
    },
    AMOUNT: number,
    FEE: number,
    NET: number,
    STATUS: string,
  ) => {
    return { DATE, TRANSACTION, AMOUNT, FEE, NET, STATUS };
  };

  const rows = [];
  for (let i = 0; i < 200; i++) {
    rows.push(
      createData(
        '15 APRIL 2020',
        {
          title: 'Paid for order at Dummy name',
          time: '21 MAR, 1:54 PM',
          orderID: '202003211354091117',
          transactionID: '29417668202',
        },
        20,
        15,
        5,
        'SUCCESS',
      ),
    );
  }

  return (
    <div className={s.TransactionHistory}>
      <div className={s.TransactionHistory__Header}>
        <Typography type={TypographyType.ROBOTO_20_MEDIUM}>
          All Transaction History
        </Typography>
        <Link to="" type={LinkType.UNDERLINE_AND_BLUE}>
          Download Payment History as .csv
        </Link>
      </div>

      <Table columns={columns} rows={rows} className={s.TableBody} />
    </div>
  );
};

export default compose<Props, Props>(withRouter)(TransactionHistoryView);

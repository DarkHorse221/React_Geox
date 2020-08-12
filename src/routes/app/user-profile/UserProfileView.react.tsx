import Tabs from 'components/Basic/Tabs';
import Typography, { TypographyType } from 'components/Basic/Typography';
import MyPlan from 'components/Specific/UserProfile/MyPlan';
import PaymentMethod from 'components/Specific/UserProfile/PaymentMethod';
import TransactionHistory from 'components/Specific/UserProfile/TransactionHistory';
import UserProfileBasic from 'components/Specific/UserProfile/UserProfileBasic';
import { History, Location } from 'history';
import React, { useCallback, useMemo } from 'react';
import { match, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './UserProfile.module.scss';
import { userProfileReducer, userProfileStateInit } from './UserProfileReducer';

interface Props {
  location?: Location;
  match?: match;
  history?: History;
}

const UserProfileView: React.FC<Props> = (props: Props) => {
  const [userProfileState, dispatch] = React.useReducer(
    userProfileReducer,
    {},
    userProfileStateInit,
  );

  const tabHeader = useCallback(
    (title: string, description: string) => (
      <div className={s.UserProfile__TabHeader}>
        <Typography
          type={TypographyType.Titillium_Web_40_600}
          className={s.UserProfile__TabHeader_Title}
        >
          {title}
        </Typography>
        <Typography type={TypographyType.ROBOTO_18_REGULAR}>
          {description}
        </Typography>
      </div>
    ),
    [],
  );

  const UserProfileBasicTab = useMemo(
    () => (
      <>
        {tabHeader('Basic', 'Set your Profile Details')}
        <UserProfileBasic />
      </>
    ),
    [tabHeader],
  );

  const UserProfilePaymentMethod = useMemo(
    () => (
      <>
        {tabHeader(
          'Payment Method',
          'Lorem Ipsum is simply dummy text of the printing',
        )}
        <PaymentMethod />
      </>
    ),
    [tabHeader],
  );

  const UserProfileMyPlan = useMemo(
    () => (
      <>
        {tabHeader(
          'My Plan',
          'Lorem Ipsum is simply dummy text of the printing',
        )}
        <MyPlan />
      </>
    ),
    [tabHeader],
  );

  const UserProfileTransactionHistory = useMemo(
    () => (
      <>
        {tabHeader(
          'Transaction History',
          'Lorem Ipsum is simply dummy text of the printing',
        )}
        <TransactionHistory />
      </>
    ),
    [tabHeader],
  );

  return (
    <div className={s.UserProfile}>
      <Tabs
        data={[
          {
            label: 'Basic',
            body: UserProfileBasicTab,
          },
          {
            label: 'Payment Method',
            body: UserProfilePaymentMethod,
          },
          {
            label: 'My Plan',
            body: UserProfileMyPlan,
          },
          {
            label: 'Transaction History',
            body: UserProfileTransactionHistory,
          },
          {
            label: 'Print Bill',
            body: 'Body1',
          },
        ]}
        initialTabIndex={0}
      />
    </div>
  );
};

export default compose<Props, Props>(withRouter)(UserProfileView);

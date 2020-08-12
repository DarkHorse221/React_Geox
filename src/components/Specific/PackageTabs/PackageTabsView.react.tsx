import cx from 'classnames';
import Tabs from 'components/Basic/Tabs';
import { History } from 'history';
import React, { useMemo } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import PackageCard from './PackageCard';
import s from './PackageTabs.module.scss';
import { packageTabsReducer, packageTabsStateInit } from './PackageTabsReducer';

interface Props {
  history?: History;
  className?: string;
}

const PackageTabsView: React.FC<Props> = (props: Props) => {
  const [packageTabsState, dispatch] = React.useReducer(
    packageTabsReducer,
    {},
    packageTabsStateInit,
  );

  const tabContent = useMemo(
    () => (
      <div className={s.tabContent}>
        <PackageCard
          header={{
            title: 'Starter',
            subTitle: 'for occasional use',
          }}
          billingType="month"
          price={100}
        />
        <PackageCard
          header={{
            title: 'Essential',
            subTitle: 'for occasional use',
          }}
          billingType="month"
          price={600}
          activePlan
        />
        <PackageCard
          header={{
            title: 'Business',
            subTitle: 'for occasional use',
          }}
          billingType="month"
          price={2400}
        />
        <PackageCard
          header={{
            title: 'Enterprise',
            subTitle: 'for occasional use',
          }}
          billingType="month"
          price={9600}
        />
      </div>
    ),
    [],
  );

  return (
    <div
      className={cx(s.PackageTabs, {
        [props.className]: props.className,
      })}
    >
      <Tabs
        data={[
          {
            label: 'Billed Monthly',
            body: tabContent,
          },
          {
            label: 'Billed Annually',
            body: tabContent,
          },
        ]}
        centered
      />
    </div>
  );
};

export default compose<Props, Props>(withRouter)(PackageTabsView);

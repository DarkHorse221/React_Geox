import { Tab, Tabs } from '@material-ui/core';
import cx from 'classnames';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { compose } from 'recompose';
import s from './Tabs.module.scss';
import { tabsReducer, tabsStateInit } from './TabsReducer';

interface Props {
  history?: History;
  data: {
    label: string;
    body: React.ReactNode;
  }[];
  centered?: boolean;
  initialTabIndex?: number;
}

const TabsView: React.FC<Props> = (props: Props) => {
  const [tabsState, dispatch] = React.useReducer(
    tabsReducer,
    {},
    tabsStateInit,
  );

  const [tabIndex, setTabIndex] = React.useState(props.initialTabIndex || 0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabIndex(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setTabIndex(index);
  };

  return (
    <>
      <Tabs
        onChange={handleChange}
        value={tabIndex}
        className={cx(s.Tabs, {
          [s.Centered]: props.centered,
        })}
        centered={props.centered}
      >
        {props.data.map(item => (
          <Tab label={item.label} />
        ))}
      </Tabs>

      <SwipeableViews
        index={tabIndex}
        onChangeIndex={handleChangeIndex}
        className={s.SwipeableViews}
      >
        {props.data.map(item => item.body)}
      </SwipeableViews>
    </>
  );
};

export default compose<Props, Props>(withRouter)(TabsView);

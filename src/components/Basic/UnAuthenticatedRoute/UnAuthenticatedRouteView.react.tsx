import { History } from 'history';
import React from 'react';
import { Redirect, RouteProps, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Routes } from 'routes/constants';
import LoadingViewReact from '../LoadingView';

interface Props extends RouteProps {
  history?: History;
  isLoading: boolean;
  authUser: {};
}

const UnAuthenticatedRouteView: React.FC<Props> = ({
  isLoading,
  authUser,
  ...props
}) => {
  const Component = props.component as React.ComponentType;

  if (isLoading) {
    return <LoadingViewReact />;
  } else if (authUser) {
    console.log('here :>> ', JSON.stringify(props.history));
    return <Redirect to={Routes.ABOUT_US} />;
  } else {
    return <Component {...props} />;
  }
};

export default compose<Props, Props>(withRouter)(UnAuthenticatedRouteView);

import { History } from 'history';
import React from 'react';
import { Redirect, RouteProps, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Routes } from 'routes/constants';
import { AuthUser } from 'types/Auth';
import LoadingView from '../LoadingView';

interface Props extends RouteProps {
  history?: History;
  isLoading: boolean;
  authUser: AuthUser;
}

const PrivateRouteView: React.FC<Props> = ({
  isLoading,
  authUser,
  ...props
}) => {
  const Component = props.component as React.ComponentType;

  if (isLoading) {
    return <LoadingView />;
  } else if (!authUser) {
    return <Redirect to={Routes.LOGIN} />;
  } else {
    return <Component {...props} />;
  }
};

export default compose<Props, Props>(withRouter)(PrivateRouteView);

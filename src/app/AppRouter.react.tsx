import LoadingView from 'components/Basic/LoadingView';
import PrivateRoute from 'components/Basic/PrivateRoute';
import UnAuthenticatedRoute from 'components/Basic/UnAuthenticatedRoute';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes } from 'routes/constants';

const Home = lazy(() => import('../routes/home'));
const Login = lazy(() => import('../routes/login'));
const SignUp = lazy(() => import('../routes/signup'));
const ForgotPassword = lazy(() => import('../routes/forget-password'));
const ResetPassword = lazy(() => import('../routes/reset-password'));
const App = lazy(() => import('../routes/app'));
const Product = lazy(() => import('../routes/app/product'));

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingView />}>
        <Switch>
          <UnAuthenticatedRoute path={Routes.LOGIN} component={Login} />
          <UnAuthenticatedRoute path={Routes.SIGNUP} component={SignUp} />
          <UnAuthenticatedRoute
            path={Routes.FORGOT_PASSWORD}
            component={ForgotPassword}
          />
          <UnAuthenticatedRoute
            path={Routes.RESET_PASSWORD}
            component={ResetPassword}
          />
          <Route exact path="/" component={Home} />

          <PrivateRoute component={App} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;

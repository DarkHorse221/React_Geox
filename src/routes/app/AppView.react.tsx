import CopyRight from 'components/Landing/CopyRight';
import Footer from 'components/Landing/Footer';
import PrivateNavbar from 'components/PrivateNavbar';
import { History, Location } from 'history';
import React, { lazy, useMemo } from 'react';
import { match, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Routes } from 'routes/constants';
import s from './App.module.scss';
import { appReducer, appStateInit } from './AppReducer';

interface Props {
  location?: Location;
  match?: match;
  history?: History;
}

const ChoosePackage = lazy(() => import('./package'));
const UserProfile = lazy(() => import('./user-profile'));
const ApiConnect = lazy(() => import('./api-connect'));
const Product = lazy(() => import('./product'));
const AboutUs = lazy(() => import('./about-us'));
const Projects = lazy(() => import('./projects'));

const AppView: React.FC<Props> = (props: Props) => {
  const [appState, dispatch] = React.useReducer(appReducer, {}, appStateInit);

  const AppFooter = useMemo(
    () => (
      <>
        <Footer />
        <CopyRight />
      </>
    ),
    [],
  );

  return (
    <div className={s.App}>
      <PrivateNavbar />
      <Switch>
        <Route exact path={Routes.PACKAGE} component={ChoosePackage} />
        <Route exact path={Routes.USER_PROFILE} component={UserProfile} />
        <Route exact path={Routes.API_CONNECT} component={ApiConnect} />
        <Route exact path={Routes.PRODUCT} component={Product} />
        <Route exact path={Routes.ABOUT_US} component={AboutUs} />
        <Route exact path={Routes.PROJECTS} component={Projects} />
      </Switch>
      {AppFooter}
    </div>
  );
};

export default compose<Props, Props>(withRouter)(AppView);

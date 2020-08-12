/* eslint-disable react-hooks/rules-of-hooks */
import Seo from 'components/Basic/Seo';
import AboutUs from 'components/Landing/AboutUs';
import ContactUs from 'components/Landing/ContactUs';
import CopyRight from 'components/Landing/CopyRight';
import Footer from 'components/Landing/Footer';
import LandingHome from 'components/Landing/LandingHome';
import OurCustomer from 'components/Landing/OurCustomer';
import OurSolution from 'components/Landing/OurSolution';
import Navbar from 'components/Navbar';
import { LandingPageSectionID } from 'contants';
import { History, Location } from 'history';
import React from 'react';
import { match, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './Home.module.scss';
import { homeReducer, homeStateInit } from './HomeReducer';
interface Props {
  location?: Location;
  match?: match;
  history?: History;
}

const HomeView: React.FC<Props> = (props: Props) => {
  const [homeState, dispatch] = React.useReducer(
    homeReducer,
    {},
    homeStateInit,
  );

  return (
    <div className={s.Home}>
      <Seo />
      <Navbar />
      <LandingHome />
      <div id={LandingPageSectionID.AboutUs}>
        <AboutUs />
        <OurCustomer />
      </div>
      <div id={LandingPageSectionID.Product}>
        <OurSolution />
      </div>
      <div id={LandingPageSectionID.ConnectUs}>
        <ContactUs />
        <Footer />
        <CopyRight />
      </div>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(HomeView);

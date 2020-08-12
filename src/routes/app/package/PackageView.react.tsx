import Typography, { TypographyType } from 'components/Basic/Typography';
import CopyRight from 'components/Landing/CopyRight';
import Footer from 'components/Landing/Footer';
import PackageTabs from 'components/Specific/PackageTabs';
import { History, Location } from 'history';
import React from 'react';
import { match, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './Package.module.scss';
import { packageReducer, packageStateInit } from './PackageReducer';

interface Props {
  location?: Location;
  match?: match;
  history?: History;
}

const PackageView: React.FC<Props> = (props: Props) => {
  const [packageState, dispatch] = React.useReducer(
    packageReducer,
    {},
    packageStateInit,
  );

  return (
    <div className={s.Package}>
      <Typography
        type={TypographyType.Titillium_Web_40_600}
        className={s.Package_Header}
      >
        User Plans - Choose Package
      </Typography>
      <PackageTabs className={s.PackageTabs} />
      <Footer />
      <CopyRight />
    </div>
  );
};

export default compose<Props, Props>(withRouter)(PackageView);

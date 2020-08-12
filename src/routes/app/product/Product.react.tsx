import { AppContext } from 'app';
import { History, Location } from 'history';
import React from 'react';
import { match, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import LoadingView from 'components/Basic/LoadingView';
import { useFetchProductData } from './ProductUtil';
import ProductView from './ProductView.react';

/** Make sure to add your default props to the defaultProps object at the bottom */
interface Props {
  location?: Location;
  match?: match;
  history?: History;
}

const Product: React.FC<Props> = (props: Props) => {
  const [appState] = React.useContext(AppContext);
  const productData = useFetchProductData(
    props.location.pathname,
    props.match.params,
  );

  if (appState.isLoading) {
    return <LoadingView />;
  }

  return <ProductView />;
};

Product.defaultProps = {};

export default compose<Props, Props>(withRouter)(Product);

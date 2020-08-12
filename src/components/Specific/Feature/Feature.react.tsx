import { TypographyColor } from 'components/Basic/Typography';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import FeatureView from './FeatureView.react';

interface Props {
  history?: History;
  icon: string;
  title: string;
  textColor?: {
    title?: TypographyColor;
    description?: TypographyColor;
  };
  className?: string;
  description?: string;
}

const Feature: React.FC<Props> = (props: Props) => {
  return <FeatureView {...props} />;
};

Feature.defaultProps = {};

export default compose<Props, Props>(withRouter)(Feature);

import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import GeoXTextAreaView from './GeoXTextAreaView.react';

interface Props {
  history?: History;
  label: string;
  className?: string;
  rows?: number;
}

const GeoXTextArea: React.FC<Props> = (props: Props) => {
  return <GeoXTextAreaView {...props} />;
};

GeoXTextArea.defaultProps = {};

export default compose<Props, Props>(withRouter)(GeoXTextArea);

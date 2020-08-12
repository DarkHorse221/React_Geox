import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import ImagePickerView from './ImagePickerView.react';

interface Props {
  history?: History;
  register?: {};
  name: string;
}

const ImagePicker: React.FC<Props> = (props: Props) => {
  return <ImagePickerView {...props} />;
};

ImagePicker.defaultProps = {};

export default compose<Props, Props>(withRouter)(ImagePicker);

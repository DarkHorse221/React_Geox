import React from 'react';
import CheckboxView from './CheckboxView.react'
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { History } from 'history';


interface Props {
  history?: History;
}

const Checkbox: React.FC<Props> = (props: Props) => {
  return (
    <CheckboxView {...props} />
  );
};

Checkbox.defaultProps = {
}

export default compose<Props, Props>(withRouter)(Checkbox);
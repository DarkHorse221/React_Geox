import React from 'react';
import { Location, History } from 'history';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import {
checkboxReducer,
checkboxStateInit,
CheckboxStateActionType,
} from './CheckboxReducer';
import s from './Checkbox.module.scss';

interface Props {
  history?: History;
}

const CheckboxView: React.FC<Props> = (props: Props) => {
  const [checkboxState, dispatch] = React.useReducer(
    checkboxReducer,
    {},
    checkboxStateInit,
  );

  return (
    <div className={s.Checkbox } >
      Checkbox...
    </div>
  );
};

export default compose<Props, Props>(withRouter)(CheckboxView);
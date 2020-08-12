import { Button, FormControl } from '@material-ui/core';
import { History } from 'history';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './ImagePicker.module.scss';
import { imagePickerReducer, imagePickerStateInit } from './ImagePickerReducer';

interface Props {
  history?: History;
  register?: {};
  name: string;
}

const ImagePickerView: React.FC<Props> = (props: Props) => {
  const [imagePickerState, dispatch] = React.useReducer(
    imagePickerReducer,
    {},
    imagePickerStateInit,
  );

  return (
    <div className={s.ImagePicker}>
      <div className={s.ImagePicker__Path}>
        C:\Users\SAI\Downloads\Profile.jpg
      </div>
      <FormControl>
        <input
          name={props.name}
          accept="image/*"
          className={s.ImagePickerInput}
          type="file"
          ref={props.register as React.LegacyRef<HTMLInputElement>}
        />
        <label>
          <Button className={s.ImagePicker__Button}>Browse</Button>
        </label>
      </FormControl>
    </div>
  );
};

export default compose<Props, Props>(withRouter)(ImagePickerView);

import { History } from 'history';
import React, { Dispatch, SetStateAction } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import SelectAvatarModalView from './SelectAvatarModalView.react';

interface Props {
  history?: History;
  isAvatarModalOpen: boolean;
  setIsAvatarModalOpen: Dispatch<SetStateAction<boolean>>;
  onAvatarSelect: (url: any) => void;
}

const SelectAvatarModal: React.FC<Props> = (props: Props) => {
  return <SelectAvatarModalView {...props} />;
};

SelectAvatarModal.defaultProps = {};

export default compose<Props, Props>(withRouter)(SelectAvatarModal);

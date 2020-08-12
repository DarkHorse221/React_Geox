import { IconButton, Modal } from '@material-ui/core';
import Avatar1 from 'assets/icons/avatars/Avatar1.png';
import Avatar2 from 'assets/icons/avatars/Avatar2.png';
import Avatar3 from 'assets/icons/avatars/Avatar3.png';
import Avatar4 from 'assets/icons/avatars/Avatar4.png';
import Avatar5 from 'assets/icons/avatars/Avatar5.png';
import Avatar6 from 'assets/icons/avatars/Avatar6.png';
import ModalCloseIcon from 'assets/icons/ModalCloseIcon.svg';
import Typography, { TypographyType } from 'components/Basic/Typography';
import { History } from 'history';
import React, { Dispatch, SetStateAction } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import s from './SelectAvatarModal.module.scss';

interface Props {
  history?: History;
  isAvatarModalOpen: boolean;
  setIsAvatarModalOpen: Dispatch<SetStateAction<boolean>>;
  onAvatarSelect: (url: any) => void;
}

const SelectAvatarModalView: React.FC<Props> = (props: Props) => {
  const avatars = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6];
  const handleClose = () => {
    props.setIsAvatarModalOpen(false);
  };

  return (
    <Modal
      open={props.isAvatarModalOpen}
      onClose={handleClose}
      className={s.SelectAvatarModal}
    >
      <div className={s.SelectAvatarModal__Body}>
        <IconButton className={s.CloseButton} onClick={handleClose}>
          <img src={ModalCloseIcon} alt="" />
        </IconButton>
        <div className={s.SelectAvatarContent}>
          <Typography type={TypographyType.Titillium_Web_30_600}>
            Select Avatar
          </Typography>
          <Typography
            type={TypographyType.ROBOTO_16_REGULAR}
            className={s.SelectAvatarContent__Description}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
          <div className={s.SelectAvatarContent__Avatars}>
            {avatars.map(avatar => (
              <IconButton onClick={() => props.onAvatarSelect(avatar)}>
                <img src={avatar} alt="" />
              </IconButton>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default compose<Props, Props>(withRouter)(SelectAvatarModalView);

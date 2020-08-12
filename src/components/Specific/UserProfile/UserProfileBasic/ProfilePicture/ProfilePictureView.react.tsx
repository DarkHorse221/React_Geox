import { yupResolver } from '@hookform/resolvers';
import defaultProfileImage from 'assets/icons/defaultProfileImage.svg';
import Button from 'components/Basic/Button';
import SubmitButton from 'components/Basic/Form/SubmitButton';
import ImagePicker from 'components/Basic/Tabs/ImagePicker';
import WhiteCard, { WhiteCardType } from 'components/Basic/WhiteCard';
import SelectAvatarModal from 'components/Modals/SelectAvatarModal';
import { History } from 'history';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useImage } from 'react-image';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import RESTAPIClient from 'RESTAPIClient';
import { mixed, object } from 'yup';
import s from './ProfilePicture.module.scss';

interface Props {
  history?: History;
}

const ProfilePictureView: React.FC<Props> = (props: Props) => {
  const [imageURL, setImageURL] = useState<string>();
  const [avatarURL, setAvatarURL] = useState<string>();
  const { register, handleSubmit, errors, getValues, watch } = useForm({
    resolver: yupResolver(
      object().shape({
        profile: mixed(),
      }),
    ),
  });

  useEffect(() => {
    const fileList = getValues('profile');
    if (fileList.length) {
      setImageURL(URL.createObjectURL(fileList[0]));
      setAvatarURL(undefined);
    }
  }, [watch('profile')]);

  const { src } = useImage({
    srcList: ['/api/customer/profile-picture', defaultProfileImage],
    useSuspense: false,
  });

  const onSubmit = () => {
    if (imageURL) {
      RESTAPIClient.User.uploadProfilePicture({
        type: 'profile_pic',
        profile: getValues('profile')[0],
      });
    } else if (avatarURL) {
      RESTAPIClient.User.uploadProfilePicture({
        type: 'avatar',
        avatar_name: avatarURL,
      });
    }
  };

  const [isAvatarModalOpen, setIsAvatarModalOpen] = React.useState(false);
  const openAvatarModal = () => {
    setIsAvatarModalOpen(true);
  };

  const onAvatarSelect = url => {
    setImageURL(undefined);
    setAvatarURL(url);
    setIsAvatarModalOpen(false);
  };

  return (
    <WhiteCard
      type={WhiteCardType.Type2}
      header={{ title: 'Profile picture' }}
      className={s.ProfilePicture}
    >
      <form className={s.ProfilePictureBody} onSubmit={handleSubmit(onSubmit)}>
        <img
          src={imageURL || avatarURL || src}
          alt=""
          className={s.ProfilePicture__Image}
        />
        <ImagePicker register={register} name="profile" />
        <Button onClick={openAvatarModal}>Avatar</Button>
        <SubmitButton className={s.UploadButton}>Upload</SubmitButton>
      </form>
      <SelectAvatarModal
        isAvatarModalOpen={isAvatarModalOpen}
        setIsAvatarModalOpen={setIsAvatarModalOpen}
        onAvatarSelect={onAvatarSelect}
      />
    </WhiteCard>
  );
};

export default compose<Props, Props>(withRouter)(ProfilePictureView);

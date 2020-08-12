import React from 'react';

interface UserProfileData {
  isLoading: boolean;
  error?: Error;
}

const useFetchUserProfileData = (
  pathname: string,
  matchParams: {},
): UserProfileData => {
const [data, updateData] = React.useState<UserProfileData>({
  isLoading: true,
});

  const fetchData = async (): Promise<void> => {
    try {
      updateData({
        ...data,
        isLoading: false,
      });
    } catch (error) {
      console.log(`RouteFetchDataError: ${error}`);
      updateData({
        ...data,
        isLoading: false,
        error: error,
        });
      }
    };

    React.useEffect(() => {
      fetchData();
    }, []);

  return data;
};

export {
  useFetchUserProfileData
};
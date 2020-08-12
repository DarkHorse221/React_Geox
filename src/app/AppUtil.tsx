import React from 'react';
import RESTAPIClient from 'RESTAPIClient';
import { AuthUser } from 'types/Auth';

interface AppData {
  isLoading: boolean;
  error?: Error;
  authUser?: AuthUser;
}

const useFetchUserData = (): AppData => {
  const [data, updateData] = React.useState<AppData>({
    isLoading: true,
  });

  const fetchData = async (): Promise<void> => {
    try {
      updateData({
        ...data,
        isLoading: true,
      });
      const authUser = await RESTAPIClient.User.getUserDetails();
      updateData({
        ...data,
        isLoading: false,
        authUser,
      });
    } catch (error) {
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

export { useFetchUserData };

import React from 'react';

interface ResetPasswordData {
  isLoading: boolean;
  error?: Error;
}

const useFetchResetPasswordData = (
  pathname: string,
  matchParams: {},
): ResetPasswordData => {
const [data, updateData] = React.useState<ResetPasswordData>({
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
  useFetchResetPasswordData
};
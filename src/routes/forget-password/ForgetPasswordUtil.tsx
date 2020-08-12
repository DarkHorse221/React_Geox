import React from 'react';

interface ForgetPasswordData {
  isLoading: boolean;
  error?: Error;
}

const useFetchForgetPasswordData = (
  pathname: string,
  matchParams: {},
): ForgetPasswordData => {
  const [data, updateData] = React.useState<ForgetPasswordData>({
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

export { useFetchForgetPasswordData };

import React from 'react';

interface ApiConnectData {
  isLoading: boolean;
  error?: Error;
}

const useFetchApiConnectData = (
  pathname: string,
  matchParams: {},
): ApiConnectData => {
const [data, updateData] = React.useState<ApiConnectData>({
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
  useFetchApiConnectData
};
import React from 'react';

interface AboutUsData {
  isLoading: boolean;
  error?: Error;
}

const useFetchAboutUsData = (
  pathname: string,
  matchParams: {},
): AboutUsData => {
const [data, updateData] = React.useState<AboutUsData>({
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
  useFetchAboutUsData
};
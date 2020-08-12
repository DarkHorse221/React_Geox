import React from 'react';

interface PackageData {
  isLoading: boolean;
  error?: Error;
}

const useFetchPackageData = (
  pathname: string,
  matchParams: {},
): PackageData => {
const [data, updateData] = React.useState<PackageData>({
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
  useFetchPackageData
};
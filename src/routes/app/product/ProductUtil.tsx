import React from 'react';

interface ProductData {
  isLoading: boolean;
  error?: Error;
}

const useFetchProductData = (
  pathname: string,
  matchParams: {},
): ProductData => {
const [data, updateData] = React.useState<ProductData>({
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
  useFetchProductData
};
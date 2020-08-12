import React from 'react';

interface ProjectsData {
  isLoading: boolean;
  error?: Error;
}

const useFetchProjectsData = (
  pathname: string,
  matchParams: {},
): ProjectsData => {
const [data, updateData] = React.useState<ProjectsData>({
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
  useFetchProjectsData
};
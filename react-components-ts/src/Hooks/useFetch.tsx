import React, { useEffect } from "react";

type Props = {
  url: string;
};

export const useFetch = (props: Props) => {
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(props.url);
      const data = await response.json();
      setData(data);
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [props.url]);
  return { isLoading, error, data };
};

import { useState } from "react";
import React from "react";

const useFetcheng = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const fetcheng = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetcheng, isLoading, error];
};

export default useFetcheng;

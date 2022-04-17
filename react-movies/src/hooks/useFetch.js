import { useState, useEffect } from "react";

function useFetch(url, dependencyArray) {
  const [fetchData, setFetchData] = useState({
    isLoaded: false,
    error: null,
    data: null,
  });

  useEffect(() => {
    const fetchDataFn = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setFetchData((fetchData) => ({
          ...fetchData,
          data,
          isLoaded: true,
        }));
      } catch (error) {
        setFetchData((fetchData) => ({ ...fetchData, error }));
      }
    };

    fetchDataFn();
  }, [url, ...dependencyArray]);

  return { ...fetchData };
}

export default useFetch;

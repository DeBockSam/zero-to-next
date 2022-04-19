import { useState, useEffect } from "react";

function useFetch(url, dependencyArray = []) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsloaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setIsloaded(true);
      setData(data);
    };
    try {
      fetchData();
    } catch (error) {
      setError(error);
    }
  }, [url, ...dependencyArray]);

  return {
    data,
    error,
    isLoaded,
  };
}

export default useFetch;

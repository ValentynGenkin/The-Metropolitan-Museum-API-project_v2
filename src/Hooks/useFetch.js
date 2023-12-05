import { useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          setError(`HTTP Error! Status: ${response.status}`);
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();

        setData(data);
        setError(null);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url]);
  return [data, isLoading, error];
}

export default useFetch;

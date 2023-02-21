import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(false);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) { throw new Error("Error al Consumir el API") }
      const data = await res.json();
      setData(data);
    } catch (error) {
      setError(error.message.toString());
    } finally {
      setLoading(false)

    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData])
  return { data, loading, error };
};

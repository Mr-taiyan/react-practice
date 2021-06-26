import { useEffect, useState } from "react";
import apiClient from "./apiClient";

const useArticle = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    apiClient
      .get(`/posts/${id}`)
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [id]);

  return { data, loading, error };
};

export default useArticle;
